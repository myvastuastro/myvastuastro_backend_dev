import { Request, Response } from 'express';
import { AskQuestionService } from '../services/askQuestionService';
export async function createAskQuestion(req: Request, res: Response): Promise<void> {
    try {
        const askQuestion = await AskQuestionService.createAskQuestion(req.body);
        if (askQuestion) {
            res.status(200).json({ message: 'Submit successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAskQuestion(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const askQuestion = await AskQuestionService.getById(userId);
        if (askQuestion) {
            res.status(200).json({ message: 'Find successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAskQuestion(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await AskQuestionService.updateAskQuestion(id, req.body);
        if (askQuestion) {
            res.status(200).json({ message: 'Update successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteAskQuestion(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await AskQuestionService.deleteAskQuestion(id);
        if (askQuestion) {
            res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllAskQuestions(req: Request, res: Response): Promise<void> {
    try {
        const askQuestion = await AskQuestionService.getAll();
        if (askQuestion) {
            res.status(200).json({ message: 'Find successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

// ✅ Answer (Astrologer updates)
export const answerQuestionVastu = async (req: Request, res: Response) => {
    try {
        const { answer, vastuAstrologerId } = req.body;
        const updated = await AskQuestionService.answerQuestionVastu(req.params.id, answer, vastuAstrologerId);

        if (!updated) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
        return res.json({ success: true, data: updated });
    } catch (err: any) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

