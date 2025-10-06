import { Router } from "express";
import {createTalkToAdvisor,getAllTalkToAdvisors, getTalkToAdvisor, updateTalkToAdvisor, deleteTalkToAdvisor} from "../controllers/talkToAdvisorController";
const router = Router();
router.post("/", createTalkToAdvisor);
router.get("/", getAllTalkToAdvisors);
router.get("/:id", getTalkToAdvisor);
router.put("/:id", updateTalkToAdvisor);
router.delete("/:id", deleteTalkToAdvisor);
export default router;
