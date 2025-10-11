import { Request, Response } from 'express';
import { AskQuestionVastuService } from '../services/askQuestionVastuService';
export async function createAskQuestionVastu(req: Request, res: Response): Promise<void> {
    try {
        const askQuestion = await AskQuestionVastuService.createAskQuestionVastu(req.body);
        if (askQuestion) {
            res.status(200).json({ message: 'Submit successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAskQuestionByUserIdVastu(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const askQuestion = await AskQuestionVastuService.getAskQuestionByUserIdVastu(userId);
        if (askQuestion) {
            res.status(200).json({ message: 'Find successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAskQuestionVastu(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await AskQuestionVastuService.updateAskQuestionVastu(id, req.body);
        if (askQuestion) {
            res.status(200).json({ message: 'Update successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteAskQuestionVastu(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await AskQuestionVastuService.deleteAskQuestionVastu(id);
        if (askQuestion) {
            res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllAskQuestionsVastu(req: Request, res: Response): Promise<void> {
    try {
        const askQuestion = await AskQuestionVastuService.getAllAskQuestionsVastu();
        if (askQuestion) {
            res.status(200).json({ message: 'Find successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

export const answerQuestionVastu = async (req: Request, res: Response) => {
    try {
        const { answer, vastuAstrologerId } = req.body;
        const updated = await AskQuestionVastuService.answerQuestionVastu(req.params.id, answer, vastuAstrologerId);

        if (!updated) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
        return res.json({ success: true, data: updated });
    } catch (err: any) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

