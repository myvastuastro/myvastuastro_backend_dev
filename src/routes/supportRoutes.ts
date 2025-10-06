import { Router } from "express";
import {createSupport,getAllSupports, getSupport, updateSupport, deleteSupport} from "../controllers/supportController";
const router = Router();


router.post("/",  createSupport);
router.get("/", getAllSupports);
router.get("/:id", getSupport);
router.put("/:id", updateSupport);
router.delete("/:id", deleteSupport);
export default router;
