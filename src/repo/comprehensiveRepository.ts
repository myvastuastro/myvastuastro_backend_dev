import Comprehensive from '../models/comprehensiveModel';
export class ComprehensiveRepository {
    static async createComprehensive(data: any): Promise<any> {
        try {
            const {
              userId,
              vastuAstrologerId,
              comprehensive,
              professionalId
              } = data;
        
              const parsedAvailability = typeof comprehensive === 'string'
                ? JSON.parse(comprehensive)
                : comprehensive;
        
              const newComprehensive = await Comprehensive.create({
                userId,
                vastuAstrologerId,
                comprehensive: parsedAvailability,
                professionalId
              });
            return newComprehensive;

        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getComprehensiveById(id: string): Promise<any | null> {
        return await Comprehensive.findById(id);
    }

    static async updateComprehensive(id: string, data: any): Promise<any> {
        try {
          // Parse availability if it's a string (e.g., from form-data)
          if (data.comprehensive && typeof data.comprehensive === 'string') {
            data.comprehensive = JSON.parse(data.comprehensive);
          }
         
          return await Comprehensive.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu Comprehensive:', error);
          throw error;
        }
      }

    static async deleteComprehensive(id: string): Promise<any> {
        return await Comprehensive.deleteOne({ _id: id });
    }

    static async getAllComprehensives(): Promise<any[]> {
        return await Comprehensive.find().populate('userId')
  .populate('vastuAstrologerId').populate('professionalId');
    }
}
