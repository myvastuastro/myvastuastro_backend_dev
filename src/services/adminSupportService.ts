// services/contactService.ts

import { AdminSupportRepository } from '../repo/adminSupportRepository';

export class AdminSupportService {
     static async createOrUpdateSupport(data: any): Promise<any> {
        try {
            // Check if record exists based on unique identifier
            // Assuming we identify support by "name" OR "userId"
            // You can change it based on your schema
            const existingSupport = await AdminSupportRepository.findByField({ name: data.name });

            if (existingSupport) {
                // ✅ Update existing record
                const updated = await AdminSupportRepository.updateSupport(existingSupport._id, data);
                return {
                    message: "Support updated successfully",
                    status: true,
                    data: updated,
                };
            } else {
                // ✅ Create new record
                const created = await AdminSupportRepository.createSupport(data);
                return {
                    message: "Support created successfully",
                    status: true,
                    data: created,
                };
            }
        } catch (error) {
            console.error("Error in createOrUpdateSupport:", error);
            throw new Error("Could not create or update support");
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await AdminSupportRepository.getSupportById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateSupport(id: string, data: any): Promise<any> {
        try {
            return await AdminSupportRepository.updateSupport(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

   static async deleteSupport(id: string): Promise<any> {
        try {
            return await AdminSupportRepository.deleteSupport(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    } 

    static async getAll(): Promise<any> {
        try {
            return await AdminSupportRepository.getAllSupports();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
