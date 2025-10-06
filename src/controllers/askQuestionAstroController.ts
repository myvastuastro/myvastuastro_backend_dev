import { Request, Response } from 'express';
import { AskQuestionAstroService } from '../services/askQuestionAstroService';
export async function createAskQuestionAstro(req: Request, res: Response): Promise<void> {
    try {
        const data = {
            ...req.body,
            file: req.file, // 👈 multer puts the uploaded file here
        };
        const askQuestionAstro = await AskQuestionAstroService.createAskQuestionAstro(data);
        if (askQuestionAstro) {
            res.status(200).json({ message: 'Submit successful', data: askQuestionAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAskQuestionAstroById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestionAstro = await AskQuestionAstroService.getAskQuestionAstroById(id);
        if (askQuestionAstro) {
            res.status(200).json({ message: 'Find successful', data: askQuestionAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function getAskQuestionAstroByUserId(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const askQuestionAstro = await AskQuestionAstroService.getAskQuestionAstroByUserId(userId);
        if (askQuestionAstro) {
            res.status(200).json({ message: 'Find successful', data: askQuestionAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAskQuestionAstro(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestionAstro = await AskQuestionAstroService.updateAskQuestionAstro(id, req.body);
        if (askQuestionAstro) {
            res.status(200).json({ message: 'Update successful', data: askQuestionAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }

}

export async function deleteAskQuestionAstro(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestionAstro = await AskQuestionAstroService.deleteAskQuestionAstro(id);
        if (askQuestionAstro) {
            res.status(200).json({ message: 'Delete successful', data: askQuestionAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAskQuestionAstroAll(req: Request, res: Response): Promise<void> {
    try {
        const askQuestionAstro = await AskQuestionAstroService.getAskQuestionAstroAll();
        if (askQuestionAstro) {
            res.status(200).json({ message: 'Find successful', data: askQuestionAstro, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

// ✅ Answer (Astrologer updates)
export const answerQuestionAstro = async (req: Request, res: Response) => {
    try {
        const { answer, astrologerId } = req.body;
        const updated = await AskQuestionAstroService.answerQuestionAstro(req.params.id, answer, astrologerId);

        if (!updated) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
        return res.json({ success: true, data: updated });
    } catch (err: any) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

