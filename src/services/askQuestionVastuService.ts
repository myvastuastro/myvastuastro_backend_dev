
import { AskQuestionRepository } from '../repo/askQuestionVastuRepository';

export class AskQuestionVastuService {
    static async createAskQuestionVastu(data: any): Promise<any> {
        try {
            const create = await AskQuestionRepository.createAskQuestionVastu(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getAskQuestionByUserIdVastu(userId: string): Promise<any> {
        try {
            return await AskQuestionRepository.getAskQuestionByUserIdVastu(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateAskQuestionVastu(id: string, data: any): Promise<any> {
        try {
            return await AskQuestionRepository.updateAskQuestionVastu(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteAskQuestionVastu(id: string): Promise<any> {
        try {
            return await AskQuestionRepository.deleteAskQuestionVastu(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAllAskQuestionsVastu(): Promise<any> {
        try {
            return await AskQuestionRepository.getAllAskQuestionsVastu();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }

    
        static async answerQuestionVastu(id: string, answer: string, vastuAstrologerId: string): Promise<any | null> {
            try {
                return await AskQuestionRepository.answerQuestionVastu(id, answer, vastuAstrologerId);
            } catch (error) {
                throw new Error("Could not answer question");
            }
        }



}
