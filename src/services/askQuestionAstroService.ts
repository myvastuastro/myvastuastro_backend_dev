
import { AskQuestionAstroRepository } from '../repo/askQuestionAstroRepository';

export class AskQuestionAstroService {
    static async createAskQuestionAstro(data: any): Promise<any> {
        try {
            const {
                userId,
                name,
                email,
                mobile,
                dob,
                birthTime,
                birthPlace,
                question,
                astrologerId,
                file
            } = data;

            let imageUrl: string | undefined;
            if (file) {
                imageUrl = file.path;
            }
            console.log("data in service", imageUrl);
            const askQuestionAstro = await AskQuestionAstroRepository.createAskQuestionAstro({
                userId,
                name,
                email,
                mobile,
                dob,
                birthTime,
                birthPlace,
                question,
                astrologerId,
                image: imageUrl,
            });


            return askQuestionAstro;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }



    static async getAskQuestionAstroById(id: string): Promise<any> {
        try {
            return await AskQuestionAstroRepository.getAskQuestionAstroById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async getAskQuestionAstroByUserId(userId: string): Promise<any> {
        try {
            return await AskQuestionAstroRepository.getAskQuestionAstroByUserId(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }
    static async updateAskQuestionAstro(id: string, data: any): Promise<any> {
        try {
            return await AskQuestionAstroRepository.updateAskQuestionAstro(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteAskQuestionAstro(id: string): Promise<any> {
        try {
            return await AskQuestionAstroRepository.deleteAskQuestionAstro(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAskQuestionAstroAll(): Promise<any> {
        try {
            return await AskQuestionAstroRepository.getAllAskQuestionAstro();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }

    static async answerQuestionAstro(id: string, answer: string, astrologerId: string): Promise<any | null> {
        try {
            return await AskQuestionAstroRepository.answerQuestionAstro(id, answer, astrologerId);
        } catch (error) {
            throw new Error("Could not answer question");
        }
    }



}
