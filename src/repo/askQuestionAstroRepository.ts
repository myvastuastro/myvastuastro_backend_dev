
import AskQuestionAstro from '../models/askQuestionAstro';

export class AskQuestionAstroRepository {


  static async createAskQuestionAstro(data: any): Promise<any> {
    try {
      return await AskQuestionAstro.create(data);
    } catch (error) {
      console.error('Error creating vastu astrogler:', error);
      throw error;
    }
  }

  static async getAskQuestionAstroById(id: string): Promise<any | null> {
    return await AskQuestionAstro.find({ _id: id });
  }

  static async getAskQuestionAstroByUserId(userId: string): Promise<any | null> {
    return await AskQuestionAstro.find({ userId: userId });
  }



  static async updateAskQuestionAstro(id: string, data: any): Promise<any> {
    try {
      return await AskQuestionAstro.findByIdAndUpdate(
        id,
        { $set: { ...data } },
        { new: true }
      );
    } catch (error) {
      console.error('Error updating vastu AskQuestionAstro:', error);
      throw error;
    }
  }

  static async deleteAskQuestionAstro(id: string): Promise<any> {
    return await AskQuestionAstro.deleteOne({ _id: id });
  }

  static async getAllAskQuestionAstro(): Promise<any[]> {
    return await AskQuestionAstro.find();
  }

  static async answerQuestionAstro(id: string, answer: string, astrologerId: string): Promise<any | null> {
    return await AskQuestionAstro.findByIdAndUpdate(
      id,
      {
        answer,
        astrologerId,
        status: "answered",
      },
      { new: true } // return updated document
    );
  }
}
