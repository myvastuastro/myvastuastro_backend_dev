
import { MyVastuAstroRepository } from '../repo/myVastuAstroRepository';

export class MyVastuAstroService {
    static async createMyVastuAstro(data: any): Promise<any> {
        try {
            const create = await MyVastuAstroRepository.createMyVastuAstro(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(userId: string): Promise<any> {
        try {
            return await MyVastuAstroRepository.getMyVastuAstroById(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateMyVastuAstro(id: string, data: any): Promise<any> {
        try {
            return await MyVastuAstroRepository.updateMyVastuAstro(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteMyVastuAstro(id: string): Promise<any> {
        try {
            return await MyVastuAstroRepository.deleteMyVastuAstro(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await MyVastuAstroRepository.getAllMyVastuAstros();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
