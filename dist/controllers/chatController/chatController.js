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
exports.startChat = startChat;
exports.getById = getById;
exports.getAll = getAll;
exports.updateById = updateById;
exports.deleteById = deleteById;
const chatService_1 = require("../../services/chatServices/chatService");
function startChat(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, astrologerId } = req.body;
            const chat = yield chatService_1.ChatService.startChat(userId, astrologerId);
            if (chat) {
                res.status(200).json({ message: 'Submit successful', data: chat, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const chat = yield chatService_1.ChatService.getChatById(req.params.id);
            if (chat) {
                res.status(200).json({ message: 'Find successful', data: chat, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const chats = yield chatService_1.ChatService.getAllChats();
            if (chats) {
                res.status(200).json({ message: 'Find successful', data: chats, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chats });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const chat = yield chatService_1.ChatService.updateChat(req.params.id, req.body);
            if (chat) {
                res.status(200).json({ message: 'Update successful', data: chat, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
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
            const chat = yield chatService_1.ChatService.deleteChat(req.params.id);
            if (chat) {
                res.status(200).json({ message: 'Delete successful', data: chat, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
