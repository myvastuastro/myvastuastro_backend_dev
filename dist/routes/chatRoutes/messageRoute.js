"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messageController_1 = require("../../controllers/chatController/messageController");
const router = (0, express_1.Router)();
router.post("/", messageController_1.sendMessage);
router.get("/:chatId", messageController_1.getChatByChatId);
router.delete("/:id", messageController_1.deleteById);
exports.default = router;
