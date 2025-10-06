// repositories/contactRepository.ts

import VastuAstrologer from '../models/vastuAstrologer';

export class VastuAstrologerRepository {


  static async createAstrologer(data: any, image: any): Promise<any> {
    try {
      const {
        name,
        exp,
        charge,
        industryExp,
        commercialExp,
        residentialExp,
        availability,
        projectsAcross,
        countriesAcrossTheWorld,
        skills,
        educationBackground,
        rating,
        satisfiedUsers,
        reviews
      } = data;

      const parsedAvailability = typeof availability === 'string'
        ? JSON.parse(availability)
        : availability;

      const newAstrologer = await VastuAstrologer.create({
        name,
        image,
        exp,
        charge,
        industryExp,
        commercialExp,
        residentialExp,
        availability: parsedAvailability,
        projectsAcross,
        countriesAcrossTheWorld,
        skills: Array.isArray(skills)
          ? skills
          : typeof skills === "string"
            ? skills.split(",").map((skill: string) => skill.trim())
            : [],
        educationBackground,
        rating,
        satisfiedUsers,
        reviews
      });
      return newAstrologer;

    } catch (error) {
      console.error('Error creating vastu astrogler:', error);
      throw error;
    }
  }

  static async getAstrologerById(id: string): Promise<any | null> {
    return await VastuAstrologer.findById(id);
  }

  static async updateAstrologer(id: string, data: any, image: any): Promise<any> {
    try {
      // Parse availability if it's a string (e.g., from form-data)
      if (data.availability && typeof data.availability === 'string') {
        data.availability = JSON.parse(data.availability);
      }
      if (image) {
        data.image = image;
      }
      return await VastuAstrologer.findByIdAndUpdate(
        id,
        { $set: { ...data } },
        { new: true }
      );
    } catch (error) {
      console.error('Error updating vastu astrologer:', error);
      throw error;
    }
  }

  static async deleteVastuAstrologer(id: string): Promise<any> {
    return await VastuAstrologer.deleteOne({ _id: id });
  }

  static async getAllAstrologers(): Promise<any[]> {
    return await VastuAstrologer.find();
  }
}
