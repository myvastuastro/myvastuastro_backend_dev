
import { LuckyNumberColorRepository } from '../repo/luckyNumberColorRepository';
import { getLuckyDetails, getZodiacSign } from '../utils/zodiacUtils';

export class LuckyNumberColorService {
    static async createLuckyNumberColor(data: any): Promise<any> {
        try {
            const sign = getZodiacSign(data.dob);
            const lucky = getLuckyDetails(sign);
            if (!lucky) {
                throw new Error('Could not determine lucky details');
            }
            const create = await LuckyNumberColorRepository.createLuckyNumberColor({
                name: data.name,
                dob: data.dob,
                sign: lucky.sign,
                luckyNumber: lucky.luckyNumber,
                luckyColor: lucky.luckyColor,
            });
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await LuckyNumberColorRepository.getLuckyNumberColorById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateLuckyNumberColor(id: string, data: any): Promise<any> {
        try {
            return await LuckyNumberColorRepository.updateLuckyNumberColor(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteLuckyNumberColor(id: string): Promise<any> {
        try {
            return await LuckyNumberColorRepository.deleteLuckyNumberColor(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await LuckyNumberColorRepository.getAllLuckyNumberColors();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }


    static async searchLuckyNumberColor(name: string, dob: string) {
        const query: any = {};

        if (name) {
            query.name = new RegExp(name, "i");
        }

        if (dob) {
            query.dob = dob; // exact match
        }
        return await LuckyNumberColorRepository.findByQuery(query);
    }





}
