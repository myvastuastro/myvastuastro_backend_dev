import { Request, Response } from 'express';
import { RemediesQAService } from '../services/remediesQAService';
export async function createRemediesQA(req: Request, res: Response): Promise<void> {
    try {
        const remediesQA = await RemediesQAService.createRemediesQA(req.body);
        if (remediesQA) {
            res.status(200).json({ message: 'Submit successful', data: remediesQA, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getRemediesQAByUserId(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const remediesQA = await RemediesQAService.getByUserId(userId);
        if (remediesQA) {
            res.status(200).json({ message: 'Find successful', data: remediesQA, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
        }

    } catch (error) {
        res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });

    }
}


export async function getRemediesQAById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const remediesQA = await RemediesQAService.getById(id);
        if (remediesQA) {
            res.status(200).json({ message: 'Find successful', data: remediesQA, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
        }

    } catch (error) {
        res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateRemediesQA(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const remediesQA = await RemediesQAService.updateRemediesQA(id, req.body);
        if (remediesQA) {
            res.status(200).json({ message: 'Update successful', data: remediesQA, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
        }
    } catch (error) {
        res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteRemediesQA(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const remediesQA = await RemediesQAService.deleteRemediesQA(id);
        if (remediesQA) {
            res.status(200).json({ message: 'Delete successful', data: remediesQA, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
        }
    } catch (error) {
        res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllRemediesQAs(req: Request, res: Response): Promise<void> {
    try {
        const remediesQA = await RemediesQAService.getAll();
        if (remediesQA) {
            res.status(200).json({ message: 'Find successful', data: remediesQA, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
        }
    } catch (error) {
        res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
    }
}

