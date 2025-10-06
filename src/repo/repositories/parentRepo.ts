
import Parent from '../../models/store/AstrologyParent';

export class ParentRepository {
  static async createParent(data: any): Promise<any> {
    try {
      return await Parent.create(data);
    } catch (error) {
      console.error('Error creating vastu astrogler:', error);
      throw error;
    }
  }

  static async getParentById(id: string): Promise<any | null> {
    return await Parent.find({ _id: id });
  }

  static async getParentByUserId(userId: string): Promise<any | null> {
    return await Parent.find({ userId: userId });
  }



  static async updateParent(id: string, data: any): Promise<any> {
    try {
      return await Parent.findByIdAndUpdate(
        id,
        { $set: { ...data } },
        { new: true }
      );
    } catch (error) {
      console.error('Error updating vastu Parent:', error);
      throw error;
    }
  }


  static async deleteParent(id: string): Promise<any> {
    return await Parent.deleteOne({ _id: id });
  }

  static async getAllParent(): Promise<any[]> {
    return await Parent.find();
  }
}
