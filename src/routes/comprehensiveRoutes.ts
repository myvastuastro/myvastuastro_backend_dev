import { Router } from "express";
import {createComprehensive,getAllComprehensives, getComprehensive, updateComprehensive, deleteComprehensive} from "../controllers/comprehensiveController";
const router = Router();
router.post("/",  createComprehensive);
router.get("/", getAllComprehensives);
router.get("/:id", getComprehensive);
router.put("/:id", updateComprehensive);
router.delete("/:id", deleteComprehensive);
export default router;
