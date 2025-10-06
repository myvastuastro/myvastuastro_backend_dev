import { ProfessionalRepository } from "../repo/professionalRepository";

export class ProfessionalService {

  static async uploadProfessional(product: any, floorlink: any): Promise<any> {
    return ProfessionalRepository.createProfessional(product, floorlink);
  }


  public static async listProfessionals() {
    return ProfessionalRepository.getAllProfessionals();
  }


  public static async updateProfessionals(id: any, data: any) {
    return ProfessionalRepository.updateProfessionals(id, data);
  }

  public static async getProfessionalsByUserId(userId: any) {
    return ProfessionalRepository.getProfessionalsByUserId(userId);
  }

  
  public static async getProfessionalsById(id: any) {
    return ProfessionalRepository.getProfessionalsById(id);
  }


  static async deleteProfessionalsById(id: string): Promise<any> {
      try {
          return await ProfessionalRepository.deleteProfessionalsById(id);
       } catch (error) {
              throw new Error('Could not delete professional');
      }
  }



}