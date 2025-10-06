import { selfProductRepository } from "../repo/selfProductRepository";

export class SelfProductService {

    static async uploadProduct(data: {
    userId: string;
    productName: string;
    fileUrl: string;
    originalName: string;
    mimeType: string;
    resourceType: string;
  }): Promise<any> {
    return selfProductRepository.createOrUpdateProduct(data);
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