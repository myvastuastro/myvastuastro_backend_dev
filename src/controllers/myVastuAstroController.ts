import { Request, Response } from 'express';
import { MyVastuAstroService } from '../services/myVastuAstroService';
export async function createMyVastuAstro(req: Request, res: Response): Promise<void> {
    try {
        const myVastuAstro = await MyVastuAstroService.createMyVastuAstro(req.body);
        if (myVastuAstro) {
            res.status(200).json({ message: 'Submit successful', data: myVastuAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getMyVastuAstro(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const myVastuAstro = await MyVastuAstroService.getById(userId);
        if (myVastuAstro) {
            res.status(200).json({ message: 'Find successful', data: myVastuAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
        }

    } catch (error) {
        res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateMyVastuAstro(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const myVastuAstro = await MyVastuAstroService.updateMyVastuAstro(id, req.body);
        if (myVastuAstro) {
            res.status(200).json({ message: 'Update successful', data: myVastuAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
        }
    } catch (error) {
        res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteMyVastuAstro(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const myVastuAstro = await MyVastuAstroService.deleteMyVastuAstro(id);
        if (myVastuAstro) {
            res.status(200).json({ message: 'Delete successful', data: myVastuAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
        }
    } catch (error) {
        res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllMyVastuAstros(req: Request, res: Response): Promise<void> {
    try {
        const myVastuAstro = await MyVastuAstroService.getAll();
        if (myVastuAstro) {
            res.status(200).json({ message: 'Find successful', data: myVastuAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
        }
    } catch (error) {
        res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
    }
}

