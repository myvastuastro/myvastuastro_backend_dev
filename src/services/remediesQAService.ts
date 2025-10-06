
import { RemediesQARepository } from '../repo/remediesQARepository';

export class RemediesQAService {
    static async createRemediesQA(data: any): Promise<any> {
        try {
            const create = await RemediesQARepository.createRemediesQA(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getByUserId(userId: string): Promise<any> {
        try {
            return await RemediesQARepository.getRemediesQAById(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }


     static async getById(id: string): Promise<any> {
        try {
            return await RemediesQARepository.getRemediesQAByUserId(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateRemediesQA(id: string, data: any): Promise<any> {
        try {
            return await RemediesQARepository.updateRemediesQA(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteRemediesQA(id: string): Promise<any> {
        try {
            return await RemediesQARepository.deleteRemediesQA(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await RemediesQARepository.getAllRemediesQAs();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
