
import Horoscope from '../models/horoscope';

export class HoroscopeRepository {


  static async createHoroscope(data: any): Promise<any> {
    return await Horoscope.create(data);
  }


  static async bulkUpsert(horoscopes: any): Promise<any> {
    const ops = horoscopes.map((h: any) => ({
      updateOne: {
        filter: { sign: h.sign, date: h.date },
        update: { $set: h },
        upsert: true
      }
    }));
    return Horoscope.bulkWrite(ops);
  }

  static async findAll() {
    return Horoscope.find().sort({ date: -1 }).lean();
  }

  static async findByDate(date: string): Promise<any> {
    return Horoscope.find({ date }).sort({ sign: 1 }).lean();
  }

  static async findById(id: string): Promise<any> {
    return Horoscope.findById(id).lean();
  }

  static async updateById(id: string, data: any): Promise<any> {
    return Horoscope.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteById(id: string): Promise<any> {
    return Horoscope.findByIdAndDelete(id);
  }
}
