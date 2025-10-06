// repositories/contactRepository.ts
import Support from '../models/support';
export class SupportRepository {
    static async createSupport(data: any): Promise<any> {
        try {
            const {
              userId,
              name,
              email,
              mobile,
              message,
              support,
              } = data;
        
              const parsedAvailability = typeof support === 'string'
                ? JSON.parse(support)
                : support;
        
              const newSupport = await Support.create({
                userId,
                name,
                email,
                mobile,
                message,
                support: parsedAvailability,
              });
            return newSupport;

        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getSupportById(id: string): Promise<any | null> {
        return await Support.findById(id);
    }

    static async updateSupport(id: string, data: any): Promise<any> {
        try {
          // Parse availability if it's a string (e.g., from form-data)
          if (data.support && typeof data.support === 'string') {
            data.support = JSON.parse(data.support);
          }
         
          return await Support.findByIdAndUpdate(
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
        return await Support.deleteOne({ _id: id });
    }


      static async getAllSupports(): Promise<any[]> {
        return await Support.find();
    }
}
