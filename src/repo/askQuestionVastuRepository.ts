
import AskQuestion from '../models/askQuestionVastu';

export class AskQuestionRepository {


    static async createAskQuestionVastu(data: any): Promise<any> {
        try {
          return await AskQuestion.create(data);
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getAskQuestionByUserIdVastu(userId: string): Promise<any | null> {
        return await AskQuestion.find({userId: userId});
    }

    static async updateAskQuestionVastu(id: string, data: any): Promise<any> {
        try {
          return await AskQuestion.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu AskQuestion:', error);
          throw error;
        }
      }

    static async deleteAskQuestionVastu(id: string): Promise<any> {
        return await AskQuestion.deleteOne({ _id: id });
    }

    static async getAllAskQuestionsVastu(): Promise<any[]> {
        return await AskQuestion.find();
    }

    static async answerQuestionVastu(id: string, answer: string, vastuAstrologerId: string): Promise<any | null> {
    return await AskQuestion.findByIdAndUpdate(
      id,
      {
        answer,
        vastuAstrologerId,
        status: "answered",
      },
      { new: true } // return updated document
    );
  }
}
