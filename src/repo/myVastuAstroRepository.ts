
import MyVastuAstro from '../models/myVastuAstro';

export class MyVastuAstroRepository {


    static async createMyVastuAstro(data: any): Promise<any> {
        try {
          return await MyVastuAstro.create(data);
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getMyVastuAstroById(userId: string): Promise<any | null> {
        return await MyVastuAstro.find({userId: userId});
    }

    static async updateMyVastuAstro(id: string, data: any): Promise<any> {
        try {
          return await MyVastuAstro.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu MyVastuAstro:', error);
          throw error;
        }
      }

    static async deleteMyVastuAstro(id: string): Promise<any> {
        return await MyVastuAstro.deleteOne({ _id: id });
    }

    static async getAllMyVastuAstros(): Promise<any[]> {
        return await MyVastuAstro.find();
    }
}
