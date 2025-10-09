
import { AskQuestionRepository } from '../repo/askQuestionRepository';

export class AskQuestionService {
    static async createAskQuestion(data: any): Promise<any> {
        try {
            const create = await AskQuestionRepository.createAskQuestion(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(userId: string): Promise<any> {
        try {
            return await AskQuestionRepository.getAskQuestionById(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateAskQuestion(id: string, data: any): Promise<any> {
        try {
            return await AskQuestionRepository.updateAskQuestion(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteAskQuestion(id: string): Promise<any> {
        try {
            return await AskQuestionRepository.deleteAskQuestion(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await AskQuestionRepository.getAllAskQuestions();
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
