import Product from "../models/selfProduct";
export class selfProductRepository {

  static async createProduct(data: Partial<any>): Promise<any> {
    try {
      const { userId, productName, ...rest } = data;
      const existingProduct = await Product.findOne({ userId, productName });
      if (existingProduct) {
        return await Product.findOneAndUpdate(
          { userId, productName },
          { $set: rest },
          { new: true }
        );
      } else {
        const product = new Product(data);
        return await product.save();
      }

    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }


  public static async getAllProducts(): Promise<any[]> {
    return await Product.find({});
  }

  public static async getByUserIdProducts(userId: any): Promise<any[]> {
    return await Product.find({ userId: userId });
  }

  public static async getByIdProducts(id: any): Promise<any[]> {
    return await Product.find({ _id: id });
  }


  public static async deleteSelfProductsControllerById(id: any): Promise<any> {
    return await Product.deleteOne({ _id: id });
  }


  public static async updateProducts(id: any, data: any): Promise<any> {
    return await Product.findByIdAndUpdate(id, { $set: data }, { new: true });
  }
}