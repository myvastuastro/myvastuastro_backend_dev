
import Address from '../../models/store/AstrologyAddress';

export class AddressRepository {
  static async createAddress(data: any): Promise<any> {
    try {
      return await Address.create(data);
    } catch (error) {
      console.error('Error creating vastu astrogler:', error);
      throw error;
    }
  }

  static async getAddressById(id: string): Promise<any | null> {
    return await Address.find({ _id: id });
  }

  static async getAddressByUserId(userId: string): Promise<any | null> {
    return await Address.find({ userId: userId });
  }



  static async updateAddress(id: string, data: any): Promise<any> {
    try {
      return await Address.findByIdAndUpdate(
        id,
        { $set: { ...data } },
        { new: true }
      );
    } catch (error) {
      console.error('Error updating vastu Address:', error);
      throw error;
    }
  }


  static async deleteAddress(id: string): Promise<any> {
    return await Address.deleteOne({ _id: id });
  }

  static async getAllAddress(): Promise<any[]> {
    return await Address.find();
  }
}
