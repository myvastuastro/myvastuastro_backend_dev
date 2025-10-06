import { Request, Response } from 'express';
import { ComprehensiveService } from '../services/comprehensiveService';
export async function createComprehensive(req: Request, res: Response): Promise<void> {
    try {
        const comprehensive = await ComprehensiveService.createComprehensive(req.body);
        if (comprehensive) {
            res.status(200).json({ message: 'Submit successful', data: comprehensive, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getComprehensive(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const comprehensive = await ComprehensiveService.getById(id);
        if (comprehensive) {
            res.status(200).json({ message: 'Find successful', data: comprehensive, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
        }

    } catch (error) {
        res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateComprehensive(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const comprehensive = await ComprehensiveService.updateComprehensive(id, req.body);
        if (comprehensive) {
            res.status(200).json({ message: 'Update successful', data: comprehensive, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
        }
    } catch (error) {
        res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteComprehensive(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const comprehensive = await ComprehensiveService.deleteComprehensive(id);
        if (comprehensive) {
            res.status(200).json({ message: 'Delete successful', data: comprehensive, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
        }
    } catch (error) {
        res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllComprehensives(req: Request, res: Response): Promise<void> {
    try {
        const comprehensive = await ComprehensiveService.getAll();
        if (comprehensive) {
            res.status(200).json({ message: 'Find successful', data: comprehensive, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
        }
    } catch (error) {
        res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
    }
}

