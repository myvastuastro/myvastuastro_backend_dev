import { Request, Response } from 'express';
import { SupportService } from '../services/supportService';
export async function createSupport(req: Request, res: Response): Promise<void> {
    try {
        const support = await SupportService.createSupport(req.body);
        if (support) {
            res.status(200).json({ message: 'Submit successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getSupport(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const support = await SupportService.getById(id);
        if (support) {
            res.status(200).json({ message: 'Find successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }

    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateSupport(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const support = await SupportService.updateSupport(id, req.body);
        if (support) {
            res.status(200).json({ message: 'Update successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }
    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteSupport(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const support = await SupportService.deleteSupport(id);
        if (support) {
            res.status(200).json({ message: 'Delete successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }
    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllSupports(req: Request, res: Response): Promise<void> {
    try {
        const support = await SupportService.getAll();
        if (support) {
            res.status(200).json({ message: 'Find successful', data: support, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
        }
    } catch (error) {
        res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
    }
}

