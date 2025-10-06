import { Router } from "express";
import {getAllDashboardData} from "../controllers/dashboardController";
const router = Router();
router.get("/all", getAllDashboardData);
export default router;
