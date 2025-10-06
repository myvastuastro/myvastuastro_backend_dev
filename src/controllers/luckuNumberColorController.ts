import { Request, Response } from 'express';
import { LuckyNumberColorService } from '../services/luckyNumberColorService';
export async function createLuckyNumberColor(req: Request, res: Response): Promise<void> {
    try {
        const luckyNumberColor = await LuckyNumberColorService.createLuckyNumberColor(req.body);
        if (luckyNumberColor) {
            res.status(200).json({ message: 'Submit successful', data: luckyNumberColor, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getLuckyNumberColor(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const luckyNumberColor = await LuckyNumberColorService.getById(id);
        if (luckyNumberColor) {
            res.status(200).json({ message: 'Find successful', data: luckyNumberColor, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
        }

    } catch (error) {
        res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateLuckyNumberColor(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const luckyNumberColor = await LuckyNumberColorService.updateLuckyNumberColor(id, req.body);
        if (luckyNumberColor) {
            res.status(200).json({ message: 'Update successful', data: luckyNumberColor, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
        }
    } catch (error) {
        res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
    }

}

export async function deleteLuckyNumberColor(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const luckyNumberColor = await LuckyNumberColorService.deleteLuckyNumberColor(id);
        if (luckyNumberColor) {
            res.status(200).json({ message: 'Delete successful', data: luckyNumberColor, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
        }
    } catch (error) {
        res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllLuckyNumberColors(req: Request, res: Response): Promise<void> {
    try {
        const luckyNumberColor = await LuckyNumberColorService.getAll();
        if (luckyNumberColor) {
            res.status(200).json({ message: 'Find successful', data: luckyNumberColor, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
        }
    } catch (error) {
        res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
    }
}


export async function searchLuckyNumberColor(req: Request, res: Response): Promise<void> {
    try {
        const { name, dob } = req.query;

        if (!name && !dob) {
            res.status(400).json({ message: "Please provide name or dob", status: "fail", statusCode: 400, data: {} });
        }
        const luckyNumberColor = await LuckyNumberColorService.searchLuckyNumberColor(
            name as string,
            dob as string
        );
        if (luckyNumberColor) {
            res.status(200).json({ message: 'Find successful', data: luckyNumberColor, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: luckyNumberColor });
        }

    } catch (error) {
        res.status(500).json({ message: 'Failed', status: "fail", statusCode: 500, data: error });

    }
}

