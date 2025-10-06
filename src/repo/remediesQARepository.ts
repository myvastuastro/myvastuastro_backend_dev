
import RemediesQA from '../models/remediesQA';

export class RemediesQARepository {


    static async createRemediesQA(data: any): Promise<any> {
        try {
          return await RemediesQA.create(data);
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getRemediesQAByUserId(userId: string): Promise<any | null> {
        return await RemediesQA.find({userId: userId});
    }

     static async getRemediesQAById(id: string): Promise<any | null> {
        return await RemediesQA.find({_id: id});
    }

    static async updateRemediesQA(id: string, data: any): Promise<any> {
        try {
          return await RemediesQA.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu RemediesQA:', error);
          throw error;
        }
      }

    static async deleteRemediesQA(id: string): Promise<any> {
        return await RemediesQA.deleteOne({ _id: id });
    }

    static async getAllRemediesQAs(): Promise<any[]> {
        return await RemediesQA.find();
    }
}
