
import Kundli from '../models/kundli';

export class KundliRepository {

  static async createKundli(data: any): Promise<any> {


    try {
      return await Kundli.create(data);
    } catch (error) {
      console.error('Error creating vastu astrogler:', error);
      throw error;
    }
  }

  static async findAll() {
    return Kundli.find();
  }

  static async findById(id: string): Promise<any> {
    return Kundli.findById(id).lean();
  }

}
