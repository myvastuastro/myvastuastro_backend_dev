import { Request, Response } from 'express';
import { TokenService } from '../services/tokenService';
export async function createToken(req: Request, res: Response): Promise<void> {
    try {
        const token = await TokenService.createToken(req.body);
        if (token) {
            res.status(200).json({ message: 'Submit successful', data: token, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getToken(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const token = await TokenService.getById(id);
        if (token) {
            res.status(200).json({ message: 'Find successful', data: token, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
        }

    } catch (error) {
        res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateToken(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const token = await TokenService.updateToken(id, req.body);
        if (token) {
            res.status(200).json({ message: 'Update successful', data: token, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
        }
    } catch (error) {
        res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteToken(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const token = await TokenService.deleteToken(id);
        if (token) {
            res.status(200).json({ message: 'Delete successful', data: token, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
        }
    } catch (error) {
        res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllTokens(req: Request, res: Response): Promise<void> {
    try {
        const token = await TokenService.getAll();
        if (token) {
            res.status(200).json({ message: 'Find successful', data: token, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
        }
    } catch (error) {
        res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
    }
}

