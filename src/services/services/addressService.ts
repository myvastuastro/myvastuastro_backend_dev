
import { AddressRepository } from '../../repo/repositories/addressRepo';

export class AddressService {
    static async createAddress(data: any): Promise<any> {
        try {
            const create = await AddressRepository.createAddress(data);
            return create;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await AddressRepository.getAddressById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

     static async getByUserId(userId: string): Promise<any> {
        try {
            return await AddressRepository.getAddressByUserId(userId);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateAddress(id: string, data: any): Promise<any> {
        try {
            return await AddressRepository.updateAddress(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteAddress(id: string): Promise<any> {
        try {
            return await AddressRepository.deleteAddress(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await AddressRepository.getAllAddress();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
