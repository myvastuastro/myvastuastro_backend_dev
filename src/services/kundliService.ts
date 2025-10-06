
import { KundliRepository } from '../repo/kundliRepository';
import { generateKundli } from '../utils/kundliGenerator';

export class KundliService {
    static async createKundli(data: any): Promise<any> {
        try {
            const {
                name, gender,
                day, month, year,
                hours, minutes, seconds,
                birthPlace, latitude, longitude, timezone
            } = data;

            // Construct Date
            const birthDate = new Date(year, month - 1, day, hours, minutes, seconds);

            // Generate Kundli Chart
            const chart = generateKundli(birthDate, latitude, longitude, timezone);

            // Save in DB
            const kundli = await KundliRepository.createKundli({
                name,
                gender,
                birthDateTime: birthDate,
                day, month, year, hours, minutes, seconds,
                birthPlace,
                latitude,
                longitude,
                timezone,
                chart,
            });
            return kundli;
        } catch (error) {
            throw new Error('Could not create kundli');
        }
    }

    static async getByIdKundli(id: string): Promise<any> {
        try {
            return await KundliRepository.findById(id);
        } catch (error) {
            throw new Error('Could not get kundli');
        }
    }




    static async getAllKundli(): Promise<any> {
        try {
            return await KundliRepository.findAll();
        } catch (error) {
            throw new Error('Could not get kundli');
        }
    }



}
