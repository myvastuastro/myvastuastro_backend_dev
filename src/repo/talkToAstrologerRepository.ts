
import TalkToAstrologer from '../models/talktoAstrologer';

export class TalkToAstrologerRepository {


  static async createTalkToAstrologer(data: any): Promise<any> {
    return await TalkToAstrologer.create(data);
  }

  static async getTalkToAstrologerById(id: string): Promise<any | null> {
    return await TalkToAstrologer.find({ _id: id });
  }

  static async updateTalkToAstrologer(id: string, data: any): Promise<any> {
    return await TalkToAstrologer.findByIdAndUpdate(
      id,
      { $set: { ...data } },
      { new: true }
    );
  }

  static async deleteTalkToAstrologer(id: string): Promise<any> {
    return await TalkToAstrologer.deleteOne({ _id: id });
  }

  static async getAllTalkToAstrologer(): Promise<any[]> {
    return await TalkToAstrologer.find();
  }
  static async toggleService(
    astrologerId: string,
    serviceKey: string,
    isEnabled: boolean
  ) {
    return await TalkToAstrologer.findByIdAndUpdate(
      astrologerId,
      { $set: { [`services.${serviceKey}`]: isEnabled } },
      { new: true }
    );
  }

  static async setOnlineStatus(astrologerId: string, isOnline: boolean) {
    return await TalkToAstrologer.findByIdAndUpdate(
      astrologerId,
      { isOnline },
      { new: true }
    );
  }

  static async updateSchedule(astrologerId: string, schedule: any) {
    return await TalkToAstrologer.findByIdAndUpdate(
      astrologerId,
      { $set: { ...schedule } },   // ✅ use $set
      { new: true }
    );
  }

   static  async findById(astrologerId: any) {
        return TalkToAstrologer.findById(astrologerId);
    }

   static async save(astrologer: any) {
        return astrologer.save();
    }

  static  async getAll() {
        return TalkToAstrologer.find().select("name rating reviewsCount");
    }

}