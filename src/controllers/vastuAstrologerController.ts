import { Request, Response } from 'express';
import { VastuAstrologerService } from '../services/vastuAstrologerService';
export async function createVastuAstrologer(req: Request, res: Response): Promise<void> {
    try {


        const file = req.file as Express.Multer.File;

        if (!file) {
            res.status(400).json({ message: 'Image is required', status: 'fail', statusCode: 400 });
            return;
        }


        const fileSize = file.size || 0;
        if (fileSize === 0) {
            res.status(400).json({ message: 'Uploaded file is empty', status: 'fail' });
            return;
        }
        const fileUrl = file.path;



        const vastuAstrologer = await VastuAstrologerService.createVastuAstrologer(req.body, fileUrl);
        if (vastuAstrologer) {
            res.status(200).json({ message: 'Submit successful', data: vastuAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getVastuAstrologer(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const vastuAstrologer = await VastuAstrologerService.getById(id);
        if (vastuAstrologer) {
            res.status(200).json({ message: 'Find successful', data: vastuAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
        }

    } catch (error) {
        res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateVastuAstrologer(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const file = req.file;

        let fileUrl = (file as Express.MulterS3.File).location || (file as Express.MulterS3.File).path;
        const vastuAstrologer = await VastuAstrologerService.updateAstrologer(id, req.body, fileUrl);
        console.log(vastuAstrologer)
        if (vastuAstrologer) {
            res.status(200).json({ message: 'Update successful', data: vastuAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
        }
    } catch (error) {
        res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
    }

}

export async function deleteVastuAstrologer(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const vastuAstrologer = await VastuAstrologerService.deleteVastuAstrologer(id);
        if (vastuAstrologer) {
            res.status(200).json({ message: 'Delete successful', data: vastuAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
        }
    } catch (error) {
        res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllVastuAstrologers(req: Request, res: Response): Promise<void> {
    try {
        const vastuAstrologer = await VastuAstrologerService.getAll();
        if (vastuAstrologer) {
            res.status(200).json({ message: 'Find successful', data: vastuAstrologer, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
        }
    } catch (error) {
        res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
    }
}

