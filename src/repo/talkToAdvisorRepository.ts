// repositories/contactRepository.ts

import TalkToAdvisor from '../models/talkToAdvisor';

export class TalkToAdvisorRepository {
    static async createAdvisor(data: any): Promise<any> {
        try {
          const {
            userId,
            name,
            email,
            mobile,
            message,
            appointment,
            } = data;
            const parsedAvailability = typeof appointment === 'string'
              ? JSON.parse(appointment)
              : appointment;
            const newAppointment = await TalkToAdvisor.create({
              userId,
              name,
              email,
              mobile,
              message,
              appointment: parsedAvailability,
            });
          return newAppointment;
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getAdvisorById(id: string): Promise<any | null> {
        return await TalkToAdvisor.findById(id);
    }

    static async updateAdvisor(id: string, data: any): Promise<any> {
        try {
          return await TalkToAdvisor.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu Advisor:', error);
          throw error;
        }
      }

    static async deleteTalkToAdvisor(id: string): Promise<any> {
        return await TalkToAdvisor.deleteOne({ _id: id });
    }

    static async getAllAdvisors(): Promise<any[]> {
        return await TalkToAdvisor.find();
    }
}
