import { Request, Response } from 'express';
import { AddressService } from '../../services/services/addressService';
export async function createAddress(req: Request, res: Response): Promise<void> {
    try {
        const address = await AddressService.createAddress(req.body);
        if (address) {
            res.status(200).json({ message: 'Submit successful', data: address, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAddressById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const address = await AddressService.getById(id);
        if (address) {
            res.status(200).json({ message: 'Find successful', data: address, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
        }

    } catch (error) {
        res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAddress(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const address = await AddressService.updateAddress(id, req.body);
        if (address) {
            res.status(200).json({ message: 'Update successful', data: address, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
        }
    } catch (error) {
        res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteAddress(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const address = await AddressService.deleteAddress(id);
        if (address) {
            res.status(200).json({ message: 'Delete successful', data: address, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
        }
    } catch (error) {
        res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllAddresss(req: Request, res: Response): Promise<void> {
    try {
        const address = await AddressService.getAll();
        if (address) {
            res.status(200).json({ message: 'Find successful', data: address, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
        }
    } catch (error) {
        res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAddressByUserId(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const address = await AddressService.getByUserId(userId);
        if (address) {
            res.status(200).json({ message: 'Find successful', data: address, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
        }
    } catch (error) {
        res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
    }
}

