
import LuckyNumberColor from '../models/luckyNumberColors';

export class LuckyNumberColorRepository {


    static async createLuckyNumberColor(data: any): Promise<any> {
        try {
            console.log("data", data)
            return await LuckyNumberColor.create(data);
        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getLuckyNumberColorById(id: string): Promise<any> {
        return await LuckyNumberColor.findById(id);
    }

    static async updateLuckyNumberColor(id: string, data: any): Promise<any> {
        try {
            return await LuckyNumberColor.findByIdAndUpdate(
                id,
                { $set: { ...data } },
                { new: true }
            );
        } catch (error) {
            console.error('Error updating vastu LuckyNumberColor:', error);
            throw error;
        }
    }

    static async deleteLuckyNumberColor(id: string): Promise<any> {
        return await LuckyNumberColor.deleteOne({ _id: id });
    }

    static async getAllLuckyNumberColors(): Promise<any[]> {
        return await LuckyNumberColor.find();
    }

    static async findByQuery(query: any): Promise<any[]> {
        return await LuckyNumberColor.find(query);
    }


}
