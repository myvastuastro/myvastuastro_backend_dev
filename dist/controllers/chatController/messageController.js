"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
exports.getChatByChatId = getChatByChatId;
exports.deleteById = deleteById;
const messageService_1 = require("../../services/chatServices/messageService");
function sendMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { chatId, fromId, fromRole, text } = req.body;
            //const io = req.app.get('io'); // Make sure 'io' is set on app in your main server file
            const message = yield messageService_1.MessageService.sendMessage({ chatId, fromId, fromRole, text });
            if (message) {
                res.status(200).json({ message: 'Send message successful', data: message, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: message });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getChatByChatId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const messages = yield messageService_1.MessageService.getMessages(req.params.chatId);
            if (messages) {
                res.status(200).json({ message: 'Find message successful', data: messages, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: messages });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const message = yield messageService_1.MessageService.deleteMessage(req.params.id);
            if (message) {
                res.status(200).json({ message: 'Delete message successful', data: message, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: message });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
