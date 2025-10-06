import { selfProductRepository } from "../repo/selfProductRepository";

export class SelfProductService {

  static async uploadProduct(product: any): Promise<any> {
    return selfProductRepository.createProduct(product);
  }


  public static async listProducts() {
    return selfProductRepository.getAllProducts();
  }

  public static async getSelfProductsController(userId: any) {
    return selfProductRepository.getByUserIdProducts(userId);
  }


  public static async getSelfProductsControllerById(id: any) {
    return selfProductRepository.getByIdProducts(id);
  }

  public static async deleteSelfProductsControllerById(id: any) {
    return selfProductRepository.deleteSelfProductsControllerById(id);
  }



  public static async updateProducts(id: any, data: any) {
    return selfProductRepository.updateProducts(id, data);
  }

}