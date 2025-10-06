import { Request, Response } from 'express';
import { TalkToAstrologerService } from '../services/talkToAstrologerService';
export async function createTalkToAstrologer(req: Request, res: Response): Promise<void> {
    try {

        const data = {
            ...req.body,
            file: req.file,
            schedule: req.body.schedule ? JSON.parse(req.body.schedule) : {}
        };

        const talkToAstrologer = await TalkToAstrologerService.createTalkToAstrologer(data);
        if (talkToAstrologer) {
            res.status(200).json({ message: 'Submit successful', data: talkToAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getTalkToAstrologerById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const talkToAstrologer = await TalkToAstrologerService.getTalkToAstrologerById(id);
        if (talkToAstrologer) {
            res.status(200).json({ message: 'Find successful', data: talkToAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}


export async function updateTalkToAstrologer(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const data = {
            ...req.body,
            schedule: req.body.schedule ? JSON.parse(req.body.schedule) : undefined,
        };
        const talkToAstrologer = await TalkToAstrologerService.updateTalkToAstrologer(id, data);

        if (talkToAstrologer) {
            res.status(200).json({ message: 'Update successful', data: talkToAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }

}

export async function deleteTalkToAstrologer(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const talkToAstrologer = await TalkToAstrologerService.deleteTalkToAstrologer(id);
        if (talkToAstrologer) {
            res.status(200).json({ message: 'Delete successful', data: talkToAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getTalkToAstrologerAll(req: Request, res: Response): Promise<void> {
    try {
        const talkToAstrologer = await TalkToAstrologerService.getAllTalkToAstrologers();
        if (talkToAstrologer) {
            res.status(200).json({ message: 'Find successful', data: talkToAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}


export async function toggleService(req: Request, res: Response): Promise<void> {
    try {
        const { serviceKey, isEnabled } = req.body;
        const updated = await TalkToAstrologerService.toggleService(req.params.id, serviceKey, isEnabled);
        if (updated) {
            res.status(200).json({ message: 'Update successful', data: updated, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updated });
        }
        // res.json({ success: true, data: updated });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export async function setOnlineStatus(req: Request, res: Response) {
    try {
        const { isOnline } = req.body;
        const updated = await TalkToAstrologerService.setOnlineStatus(req.params.id, isOnline);
        if (updated) {
            res.status(200).json({ message: 'Set online successful', data: updated, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updated });
        }
        //  res.json({ success: true, data: updated });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export async function updateSchedule(req: Request, res: Response) {
    try {

        const schedule = req.body;
        const updated = await TalkToAstrologerService.updateSchedule(req.params.id, schedule);
        if (updated) {
            res.status(200).json({ message: 'Update successful', data: updated, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updated });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}



export async function addReview(req: Request, res: Response): Promise<void> {
    try {

        const { astrologerId } = req.params;
        const { userId, username, rating, comment } = req.body;

        const updatedAstrologer = await TalkToAstrologerService.addReview(astrologerId, {
            userId,
            username,
            rating,
            comment
        });

        if (updatedAstrologer) {
            res.status(200).json({ message: 'Submit successful', data: updatedAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updatedAstrologer });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}


export async function getReviews(req: Request, res: Response): Promise<void> {
    try {

        const { astrologerId } = req.params;
        const reviews = await TalkToAstrologerService.getReviews(astrologerId);
        if (reviews) {
            res.status(200).json({ message: 'Submit successful', data: reviews, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: reviews });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}



