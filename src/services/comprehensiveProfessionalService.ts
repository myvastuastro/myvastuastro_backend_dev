import { ComprehensiveProfessionalRepository } from "../repo/comprehensiveProfessionalRepository";

export class ComprehensiveProfessionalService {

  static async uploadComprehensiveProfessional(product: any, floorlink: any): Promise<any> {
    return ComprehensiveProfessionalRepository.createComprehensiveProfessional(product, floorlink);
  }


  public static async listComprehensiveProfessionals() {
    return ComprehensiveProfessionalRepository.getAllComprehensiveProfessionals();
  }


  public static async updateComprehensiveProfessionals(id: any, data: any) {
    return ComprehensiveProfessionalRepository.updateComprehensiveProfessionals(id, data);
  }

  public static async getComprehensiveProfessionalsByUserId(userId: any) {
    return ComprehensiveProfessionalRepository.getComprehensiveProfessionalsByUserId(userId);
  }

     static async getComprehensiveProfessionalsById(id: string): Promise<any> {
          try {
              return await ComprehensiveProfessionalRepository.getComprehensiveProfessionalsById(id);
          } catch (error) {
              throw new Error('Could not get contact');
          }
      }
  



}