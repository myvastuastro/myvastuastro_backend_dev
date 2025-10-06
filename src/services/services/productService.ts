
import { ProductRepository } from '../../repo/repositories/productRepo';

export class ProductService {
    static async createProduct(data: any): Promise<any> {
        try {
            const {
                parentId,
                name,
                category,
                description,
                price,
                discountPrice,
                stock,
                sku,
                astrologerId,
                deliveryTime,
                isActive,
                tags,
                rating,
                reviews,
                file
            } = data;

            let imageUrl: string | undefined;
            if (file) {
                imageUrl = file.path;
            }
            console.log("data in service", imageUrl);
            const productRepo = await ProductRepository.createProduct({
                parentId,
                name,
                category,
                description,
                price,
                discountPrice,
                stock,
                sku,
                astrologerId,
                deliveryTime,
                isActive,
                tags,
                rating,
                reviews,
                file: imageUrl,
            });


            return productRepo;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }



    static async getProductById(id: string): Promise<any> {
        try {
            return await ProductRepository.getProductById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async getProductByUserId(userId: string): Promise<any> {
        try {
            return await ProductRepository.getProductByUserId(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }
    static async updateProduct(id: string, data: any): Promise<any> {
        try {
            return await ProductRepository.updateProduct(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteProduct(id: string): Promise<any> {
        try {
            return await ProductRepository.deleteProduct(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getProductAll(): Promise<any> {
        try {
            return await ProductRepository.getAllProduct();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }

    



}