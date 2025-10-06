import Professional from "../models/professional";
export class ProfessionalRepository {

    static async createProfessional(data: any, floorlink: string): Promise<any> {
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
        const professional = new Professional(updatedData);
        return await professional.save();
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    }


  public static async getAllProfessionals(): Promise<any[]> {
    return await Professional.find({});
  }

  public static async getProfessionalsByUserId(userId: any): Promise<any> {
    return await Professional.find(userId);
  }

  
   public static async getProfessionalsById(id: any): Promise<any> {
    return await Professional.findById(id);
  }

  public static async updateProfessionals(id: any, data: any): Promise<any> {
     try {
              if (data.appointment && typeof data.appointment === 'string') {
                data.appointment = JSON.parse(data.appointment);
              }
             
              return await Professional.findByIdAndUpdate(
                id,
                { $set: { ...data } },
                { new: true }
              );
            } catch (error) {
              console.error('Error updating vastu Professional:', error);
              throw error;
            }
    //return await Professional.findByIdAndUpdate(id, { $set: data }, { new: true });
  }

    public static async deleteProfessionalsById(id: string): Promise<any> {
        return await Professional.deleteOne({ _id: id });
    }

}