// services/contactService.ts

import { ComprehensiveFreeCallRepository } from '../repo/comprehensiveFreeCallRepository';

export class ComprehensiveFreeCallService {
    static async createComprehensive(data: any): Promise<any> {
        try {
            const create = await ComprehensiveFreeCallRepository.createComprehensive(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await ComprehensiveFreeCallRepository.getComprehensiveById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateComprehensive(id: string, data: any): Promise<any> {
        try {
            return await ComprehensiveFreeCallRepository.updateComprehensive(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteComprehensive(id: string): Promise<any> {
        try {
            return await ComprehensiveFreeCallRepository.deleteComprehensive(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await ComprehensiveFreeCallRepository.getAllComprehensives();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
