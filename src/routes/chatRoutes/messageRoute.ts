import { Router } from "express";
import {sendMessage,getChatByChatId, deleteById} from "../../controllers/chatController/messageController";
const router = Router();
router.post("/", sendMessage);
router.get("/:chatId", getChatByChatId);
router.delete("/:id", deleteById);

export default router;