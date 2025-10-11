import { Router } from "express";
import {createComprehensive,getAllComprehensives, getComprehensive, updateComprehensive, deleteComprehensive} from "../controllers/comprehensiveController";
const router = Router();
router.post("/freecall/",  createComprehensive);
router.get("/freecall", getAllComprehensives);
router.get("/freecall/:id", getComprehensive);
router.put("/freecall/:id", updateComprehensive);
router.delete("/freecall/:id", deleteComprehensive);
export default router;
