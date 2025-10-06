
import { KundliService } from "../services/kundliService";
import { Request, Response } from 'express';


// ✅ Create single kundli
export async function createKundli(req: Request, res: Response): Promise<void> {
    try {
        const kundli = await KundliService.createKundli(req.body);
            console.log("kundli", kundli)

        if (kundli) {
            res.status(200).json({ message: 'Submit successful', data: kundli, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: kundli });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};


// ✅ Get single kundli by ID
export async function getKundliById(req: Request, res: Response): Promise<void> {
    try {
        const kundli = await KundliService.getByIdKundli(req.params.id);
        if (kundli) {
            res.status(200).json({ message: 'Find successful', data: kundli, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: kundli });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};





// ✅ Get all kundlis
export async function getAllKundlis(req: Request, res: Response) {
    try {
        const kundlis = await KundliService.getAllKundli();
        if (kundlis) {
            res.status(200).json({ message: 'Kundlis find successfully', data: kundlis, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: kundlis });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};





