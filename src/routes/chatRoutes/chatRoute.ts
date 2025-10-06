import { Router } from "express";
import {startChat,getById, getAll, updateById, deleteById} from "../../controllers/chatController/chatController";
const router = Router();


router.post("/start", startChat);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateById);
router.delete("/:id", deleteById);
export default router;