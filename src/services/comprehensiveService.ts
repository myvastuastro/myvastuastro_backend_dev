// services/contactService.ts

import { ComprehensiveRepository } from '../repo/comprehensiveRepository';

export class ComprehensiveService {
    static async createComprehensive(data: any): Promise<any> {
        try {
            const create = await ComprehensiveRepository.createComprehensive(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await ComprehensiveRepository.getComprehensiveById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateComprehensive(id: string, data: any): Promise<any> {
        try {
            return await ComprehensiveRepository.updateComprehensive(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteComprehensive(id: string): Promise<any> {
        try {
            return await ComprehensiveRepository.deleteComprehensive(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await ComprehensiveRepository.getAllComprehensives();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
