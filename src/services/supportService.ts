// services/contactService.ts

import { SupportRepository } from '../repo/supportRepository';

export class SupportService {
    static async createSupport(data: any): Promise<any> {
        try {
            const create = await SupportRepository.createSupport(data);
            return create;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await SupportRepository.getSupportById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateSupport(id: string, data: any): Promise<any> {
        try {
            return await SupportRepository.updateSupport(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteSupport(id: string): Promise<any> {
        try {
            return await SupportRepository.deleteSupport(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await SupportRepository.getAllSupports();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
