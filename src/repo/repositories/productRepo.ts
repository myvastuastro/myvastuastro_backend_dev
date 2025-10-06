
import Product from '../../models/store/AstrologyProduct';

export class ProductRepository {
  static async createProduct(data: any): Promise<any> {
    try {
      return await Product.create(data);
    } catch (error) {
      console.error('Error creating vastu astrogler:', error);
      throw error;
    }
  }

  static async getProductById(id: string): Promise<any | null> {
    return await Product.find({ _id: id });
  }

  static async getProductByUserId(userId: string): Promise<any | null> {
    return await Product.find({ userId: userId });
  }



  static async updateProduct(id: string, data: any): Promise<any> {
    try {
      return await Product.findByIdAndUpdate(
        id,
        { $set: { ...data } },
        { new: true }
      );
    } catch (error) {
      console.error('Error updating vastu Product:', error);
      throw error;
    }
  }


  static async deleteProduct(id: string): Promise<any> {
    return await Product.deleteOne({ _id: id });
  }

  static async getAllProduct(): Promise<any[]> {
    return await Product.find();
  }

 
}
