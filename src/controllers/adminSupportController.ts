import { Request, Response } from 'express';
import { AdminSupportService } from '../services/adminSupportService';
export async function createAdminSupport(req: Request, res: Response): Promise<void> {
    try {
        const support = await AdminSupportService.createOrUpdateSupport(req.body);
        if (support) {
            res.status(200).json({ message: 'Submit successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAdminSupport(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const support = await AdminSupportService.getById(id);
        if (support) {
            res.status(200).json({ message: 'Find successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }

    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAdminSupport(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const support = await AdminSupportService.updateSupport(id, req.body);
        if (support) {
            res.status(200).json({ message: 'Update successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }
    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteAdminSupport(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const support = await AdminSupportService.deleteSupport(id);
        if (support) {
            res.status(200).json({ message: 'Delete successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }
    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllAdminSupports(req: Request, res: Response): Promise<void> {
    try {
        const support = await AdminSupportService.getAll();
        if (support) {
            res.status(200).json({ message: 'Find successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }
    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
    }
}

