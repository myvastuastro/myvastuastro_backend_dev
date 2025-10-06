
import { HoroscopeRepository } from '../repo/horoscopeRepo';

export class HoroscopeService {
    static async createHoroscope(data: any): Promise<any> {
        try {
            const create = await HoroscopeRepository.createHoroscope(data);
            return create;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }

    
    static async uploadHoroscopes(horoscopes: any[]) {
        return await HoroscopeRepository.bulkUpsert(horoscopes);
    }

    static async getHoroscopesByDate(date: string) {
        return HoroscopeRepository.findByDate(date);
    }


    static async getByIdHoroscope(id: string): Promise<any> {
        try {
            return await HoroscopeRepository.findById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateHoroscope(id: string, data: any): Promise<any> {
        try {
            return await HoroscopeRepository.updateById(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteHoroscope(id: string): Promise<any> {
        try {
            return await HoroscopeRepository.deleteById(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAllHoroscope(): Promise<any> {
        try {
            return await HoroscopeRepository.findAll();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
