import ComprehensiveProfessional from "../models/ComrehensiveProfessional";
export class ComprehensiveProfessionalRepository {

  static async createComprehensiveProfessional(data: any, floorlink: string): Promise<any> {
    try {
      if (typeof data.appointment === 'string') {
        try {
          data.appointment = JSON.parse(data.appointment);
        } catch (parseError) {
          console.error('Invalid appointment JSON:', parseError);
          throw new Error('Invalid format for appointment. It should be a valid JSON array.');
        }
      }
      const updatedData = {
        ...data,
        floorlink,
      };
      const professional = new ComprehensiveProfessional(updatedData);
      return await professional.save();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }


  public static async getAllComprehensiveProfessionals(): Promise<any[]> {
    return await ComprehensiveProfessional.find({});
  }

  public static async getComprehensiveProfessionalsByUserId(userId: any): Promise<any> {
     return await ComprehensiveProfessional.find(userId);

  }
  
   public static async getComprehensiveProfessionalsById(id: any): Promise<any> {
     return await ComprehensiveProfessional.find({_id: id});

  }

  public static async updateComprehensiveProfessionals(id: any, data: any): Promise<any> {

      try {
          if (data.appointment && typeof data.appointment === 'string') {
            data.appointment = JSON.parse(data.appointment);
          }
         
          return await ComprehensiveProfessional.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu ComprehensiveProfessional:', error);
          throw error;
        }
  }
}