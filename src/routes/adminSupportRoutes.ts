import { Router } from "express";
import {createAdminSupport,getAllAdminSupports, getAdminSupport, updateAdminSupport, deleteAdminSupport} from "../controllers/adminSupportController";
const router = Router();


router.post("/", createAdminSupport);
router.get("/", getAllAdminSupports);
router.get("/:id", getAdminSupport);
router.put("/:id", updateAdminSupport);
router.delete("/:id", deleteAdminSupport);
export default router;
