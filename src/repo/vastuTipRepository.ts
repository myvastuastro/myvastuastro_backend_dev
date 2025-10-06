import Product from "../models/vastuTip";
export class vastuTipRepository {
    static async createProduct(data: Partial<any>): Promise<any> {
      try {
        const { title, description, ...rest } = data;
        const existingProduct = await Product.findOne({ title, description });
        if (existingProduct) {
          return await Product.findOneAndUpdate(
            { title, description },
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


  public static async updateProducts(id: any, data: any): Promise<any> {
    return await Product.findByIdAndUpdate(id, { $set: data }, { new: true });
  }


    static async getVastuTipsControllerById(id: string): Promise<any | null> {
        return await Product.findById(id);
    }

       static async deleteVastuTipsController(id: string): Promise<any> {
        return await Product.deleteOne({ _id: id });
    }

}