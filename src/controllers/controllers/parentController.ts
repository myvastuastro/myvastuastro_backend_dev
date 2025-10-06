import { Request, Response } from 'express';
import { ParentService } from '../../services/services/parentService';
export async function createParent(req: Request, res: Response): Promise<void> {
    try {
        const data = {
            ...req.body,
            file: req.file,
        };
        const parentService = await ParentService.createParent(data);
        if (parentService) {
            res.status(200).json({ message: 'Submit successful', data: parentService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getParentById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const parentService = await ParentService.getParentById(id);
        if (parentService) {
            res.status(200).json({ message: 'Find successful', data: parentService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
        }

    } catch (error) {
        res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function getParentByUserId(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const parentService = await ParentService.getParentByUserId(userId);
        if (parentService) {
            res.status(200).json({ message: 'Find successful', data: parentService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
        }

    } catch (error) {
        res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateParent(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const parentService = await ParentService.updateParent(id, req.body);
        if (parentService) {
            res.status(200).json({ message: 'Update successful', data: parentService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
        }
    } catch (error) {
        res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
    }

}

export async function deleteParent(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const parentService = await ParentService.deleteParent(id);
        if (parentService) {
            res.status(200).json({ message: 'Delete successful', data: parentService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
        }
    } catch (error) {
        res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getParentAll(req: Request, res: Response): Promise<void> {
    try {
        const parentService = await ParentService.getParentAll();
        if (parentService) {
            res.status(200).json({ message: 'Find successful', data: parentService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
        }
    } catch (error) {
        res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
    }
}

