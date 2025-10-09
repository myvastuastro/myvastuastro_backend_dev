
import AskQuestion from '../models/askQuestion';

export class AskQuestionRepository {


    static async createAskQuestion(data: any): Promise<any> {
        try {
          return await AskQuestion.create(data);
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getAskQuestionById(userId: string): Promise<any | null> {
        return await AskQuestion.find({userId: userId});
    }

    static async updateAskQuestion(id: string, data: any): Promise<any> {
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

    static async deleteAskQuestion(id: string): Promise<any> {
        return await AskQuestion.deleteOne({ _id: id });
    }

    static async getAllAskQuestions(): Promise<any[]> {
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
