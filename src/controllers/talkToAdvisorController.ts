import { Request, Response } from 'express';
import { TalkToAdvisorService } from '../services/talkToAdvisorService';
export async function createTalkToAdvisor(req: Request, res: Response): Promise<void> {
    try {
        const talkToAdvisorService = await TalkToAdvisorService.createTalkToAdvisor(req.body);
        if (talkToAdvisorService) {
            res.status(200).json({ message: 'Submit successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getTalkToAdvisor(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const talkToAdvisorService = await TalkToAdvisorService.getById(id);
        if (talkToAdvisorService) {
            res.status(200).json({ message: 'Find successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
        }

    } catch (error) {
        res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateTalkToAdvisor(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const talkToAdvisorService = await TalkToAdvisorService.updateAdvisor(id, req.body);
        if (talkToAdvisorService) {
            res.status(200).json({ message: 'Update successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
        }
    } catch (error) {
        res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteTalkToAdvisor(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const talkToAdvisorService = await TalkToAdvisorService.deleteTalkToAdvisor(id);
        if (talkToAdvisorService) {
            res.status(200).json({ message: 'Delete successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
        }
    } catch (error) {
        res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllTalkToAdvisors(req: Request, res: Response): Promise<void> {
    try {
        const talkToAdvisorService = await TalkToAdvisorService.getAll();
        if (talkToAdvisorService) {
            res.status(200).json({ message: 'Find successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
        }
    } catch (error) {
        res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
    }
}

