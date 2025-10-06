// services/contactService.ts

import { VastuAstrologerRepository } from '../repo/vastuAstrologerRepository';

export class VastuAstrologerService {
    static async createVastuAstrologer(data: any, image: any): Promise<any> {
        try {
            const create = await VastuAstrologerRepository.createAstrologer(data, image);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await VastuAstrologerRepository.getAstrologerById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateAstrologer(id: string, data: any, image: any): Promise<any> {
        try {
            return await VastuAstrologerRepository.updateAstrologer(id, data, image);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteVastuAstrologer(id: string): Promise<any> {
        try {
            return await VastuAstrologerRepository.deleteVastuAstrologer(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await VastuAstrologerRepository.getAllAstrologers();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
