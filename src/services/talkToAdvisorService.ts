
import { TalkToAdvisorRepository } from '../repo/talkToAdvisorRepository';

export class TalkToAdvisorService {
    static async createTalkToAdvisor(data: any): Promise<any> {
        try {
            const create = await TalkToAdvisorRepository.createAdvisor(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await TalkToAdvisorRepository.getAdvisorById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateAdvisor(id: string, data: any): Promise<any> {
        try {
            return await TalkToAdvisorRepository.updateAdvisor(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteTalkToAdvisor(id: string): Promise<any> {
        try {
            return await TalkToAdvisorRepository.deleteTalkToAdvisor(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await TalkToAdvisorRepository.getAllAdvisors();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
