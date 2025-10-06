import { vastuTipRepository } from "../repo/vastuTipRepository";

export class VastuTipService {

  static async uploadProduct(product: any): Promise<any> {
    return vastuTipRepository.createProduct(product);
  }


  public static async listProducts() {
    return vastuTipRepository.getAllProducts();
  }


  public static async updateProducts(id: any, data: any) {
    return vastuTipRepository.updateProducts(id, data);
  }


  static async getVastuTipsControllerById(id: string): Promise<any> {
    try {
      return await vastuTipRepository.getVastuTipsControllerById(id);
    } catch (error) {
      throw new Error('Could not get contact');
    }
  }

  static async deleteVastuTipsController(id: string): Promise<any> {
          try {
              return await vastuTipRepository.deleteVastuTipsController(id);
          } catch (error) {
              throw new Error('Could not delete vastu tips');
          }
      }
}