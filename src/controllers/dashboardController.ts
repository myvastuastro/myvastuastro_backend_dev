import { Request, Response } from "express";
import { DashboardService } from "../services/dashboardService";

export async function getAllDashboardData(req: Request, res: Response):  Promise<void> {
    try {
      const data = await DashboardService.fetchDashboardData();
       if (data) {
            res.status(200).json({ message: 'Fetch data successful', data: data, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: data });
        }
    } catch (error) {
             res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
  }

