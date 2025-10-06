
import { MatchService } from "../services/matchService";
import { Request, Response } from 'express';


// ✅ Create single match
export async function createMatch(req: Request, res: Response): Promise<void> {
    try {
        const match = await MatchService.createMatch(req.body);
        if (match) {
            res.status(200).json({ message: 'Submit successful', data: match, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};


// ✅ Get single match by ID
export async function getMatchById(req: Request, res: Response): Promise<void> {
    try {
        const match = await MatchService.getByIdMatch(req.params.id);
        if (match) {
            res.status(200).json({ message: 'Find successful', data: match, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};





// ✅ Get all matchs
export async function getAllMatchs(req: Request, res: Response) {
    try {
        const matchs = await MatchService.getAllMatch();
        if (matchs) {
            res.status(200).json({ message: 'Matchs find successfully', data: matchs, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: matchs });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};







// ✅ Update match by ID
export async function updateMatch(req: Request, res: Response) {
    try {
        const match = await MatchService.updateMatch(req.params.id, req.body);
        if (!match) return res.status(404).json({ message: "Match not found", status: "failed", statusCode: 404 });
        if (match) {
            res.status(200).json({ message: 'Match update successful', data: match, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};

// ✅ Delete match by ID
export async function deleteMatch(req: Request, res: Response) {
    try {
        const match = await MatchService.deleteMatch(req.params.id);
        if (!match) return res.status(404).json({ message: "Match not found", status: "failed", statusCode: 404 });
        if (match) {
            res.status(200).json({ message: 'Match deleted successfully', data: match, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};




