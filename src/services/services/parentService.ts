
import { ParentRepository } from '../../repo/repositories/parentRepo';

export class ParentService {
    static async createParent(data: any): Promise<any> {
        try {
            const {
                name,
                description,
                isActive,
                file
            } = data;

            let imageUrl: string | undefined;
            if (file) {
                imageUrl = file.path;
            }
            const parentRepo = await ParentRepository.createParent({
                name,
                description,
                isActive,
                file: imageUrl,
            });


            return parentRepo;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }



    static async getParentById(id: string): Promise<any> {
        try {
            return await ParentRepository.getParentById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async getParentByUserId(userId: string): Promise<any> {
        try {
            return await ParentRepository.getParentByUserId(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }
    static async updateParent(id: string, data: any): Promise<any> {
        try {
            return await ParentRepository.updateParent(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteParent(id: string): Promise<any> {
        try {
            return await ParentRepository.deleteParent(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getParentAll(): Promise<any> {
        try {
            return await ParentRepository.getAllParent();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }

   



}