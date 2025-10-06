
import { HoroscopeService } from "../services/horoscopeService";
import { Request, Response } from 'express';


// ✅ Create single horoscope
export async function createHoroscope(req: Request, res: Response): Promise<void> {
    try {
        const horoscope = await HoroscopeService.createHoroscope(req.body);
        if (horoscope) {
            res.status(200).json({ message: 'Submit successful', data: horoscope, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};


// ✅ Get single horoscope by ID
export async function getHoroscopeById(req: Request, res: Response): Promise<void> {
    try {
        const horoscope = await HoroscopeService.getByIdHoroscope(req.params.id);
        if (horoscope) {
            res.status(200).json({ message: 'Find successful', data: horoscope, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};



// ✅ Upload JSON for bulk insert
export async function uploadHoroscopes(req: Request, res: Response) {
    try {
        if (!req.file) return res.status(400).json({ message: "Upload a JSON file", status: "fail", statusCode: 400 });
        const jsonData = JSON.parse(req.file.buffer.toString());
        const horoscope = await HoroscopeService.uploadHoroscopes(jsonData);
        if (horoscope) {
            res.status(200).json({ message: 'Horoscopes uploaded successfully', data: horoscope, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};

// ✅ Get all horoscopes
export async function getAllHoroscopes(req: Request, res: Response) {
    try {
        const horoscopes = await HoroscopeService.getAllHoroscope();
        if (horoscopes) {
            res.status(200).json({ message: 'Horoscopes find successfully', data: horoscopes, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscopes });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });

    }
};

// ✅ Get horoscopes by date
export async function getHoroscopesByDate(req: Request, res: Response) {
    try {
        const dateParam = req.query.date;
        const date = typeof dateParam === "string" ? dateParam : new Date().toISOString().slice(0, 10);
        const horoscopes = await HoroscopeService.getHoroscopesByDate(date);
        if (horoscopes) {
            res.status(200).json({ message: 'Horoscopes find successfully', data: horoscopes, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscopes });
        }
    } catch (error) {
        console.error("Fetch By Date Error:", error);
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};





// ✅ Update horoscope by ID
export async function updateHoroscope(req: Request, res: Response) {
    try {
        const horoscope = await HoroscopeService.updateHoroscope(req.params.id, req.body);
        if (!horoscope) return res.status(404).json({ message: "Horoscope not found", status: "failed", statusCode: 404 });
        if (horoscope) {
            res.status(200).json({ message: 'Horoscope update successful', data: horoscope, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};

// ✅ Delete horoscope by ID
export const deleteHoroscope = async (req: Request, res: Response) => {
    try {
        const horoscope = await HoroscopeService.deleteHoroscope(req.params.id);
        if (!horoscope) return res.status(404).json({ message: "Horoscope not found", status: "failed", statusCode: 404 });
        if (horoscope) {
            res.status(200).json({ message: 'Horoscope deleted successfully', data: horoscope, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
};