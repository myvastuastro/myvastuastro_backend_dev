// repositories/contactRepository.ts
import AdminSupport from '../models/adminSupport';
export class AdminSupportRepository {
    static async createSupport(data: any): Promise<any> {
        try {
            const {
              name,
              support,
              } = data;
        
              const parsedAvailability = typeof support === 'string'
                ? JSON.parse(support)
                : support;
                const existingSupport = await AdminSupport.findOne({ name });
                if (existingSupport) {
                  existingSupport.support = parsedAvailability;
                  await existingSupport.save();
                  return {
                      message: 'Support data updated successfully',
                      data: existingSupport,
                      isNew: false
                  };
              } else {
                  const newSupport = await AdminSupport.create({
                      name,
                      support: parsedAvailability,
                  });
                  return {
                      message: 'Support data created successfully',
                      data: newSupport,
                      isNew: true
                  };
              }
        
            
         

        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getSupportById(id: string): Promise<any | null> {
        return await AdminSupport.findById(id);
    }

    static async updateSupport(id: string, data: any): Promise<any> {
        try {
          if (data.support && typeof data.support === 'string') {
            data.support = JSON.parse(data.support);
          }
         
          return await AdminSupport.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu Support:', error);
          throw error;
        }
      }

    static async deleteSupport(id: string): Promise<any> {
        return await AdminSupport.deleteOne({ _id: id });
    }

    // static async getAllSupports(): Promise<any> {
    //     return await AdminSupport.find();
    // }
     static async getAllSupports(): Promise<any> {
        return await AdminSupport.findOne();
    }

    static async findByField(filter: any): Promise<any> {
    return await AdminSupport.findOne(filter);  // Assuming you're using Mongoose
}
}
