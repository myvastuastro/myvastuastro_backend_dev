// services/contactService.ts

import { TokenRepository } from '../repo/tokenRepository';

export class TokenService {
    static async createToken(data: any): Promise<any> {
        try {
            const create = await TokenRepository.createToken(data);
            return create;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await TokenRepository.getTokenById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateToken(id: string, data: any): Promise<any> {
        try {
            return await TokenRepository.updateToken(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteToken(id: string): Promise<any> {
        try {
            return await TokenRepository.deleteToken(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await TokenRepository.getAllTokens();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
