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
exports.ChatService = void 0;
const chatRepository_1 = require("../../repo/chatRepositories/chatRepository");
const NotificationService_1 = require("../../utils/NotificationService");
const onlineAstrologers = {};
class ChatService {
    static setOnline(userId, socketId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            if (role === "astrologer")
                onlineAstrologers[userId] = socketId;
        });
    }
    static removeOnline(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            delete onlineAstrologers[userId];
        });
    }
    static startChat(userId, astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            let chat = yield chatRepository_1.ChatRepository.findActive(userId, astrologerId);
            console.log(chat);
            if (!chat) {
                chat = yield chatRepository_1.ChatRepository.create({ userId, astrologerId, status: "active" });
            }
            yield NotificationService_1.NotificationService.sendToAstrologer(astrologerId, chat._id, userId);
            return chat;
        });
    }
    static getChatById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chatRepository_1.ChatRepository.findById(id);
        });
    }
    static getAllChats() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chatRepository_1.ChatRepository.findAll();
        });
    }
    static updateChat(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chatRepository_1.ChatRepository.update(id, data);
        });
    }
    static deleteChat(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chatRepository_1.ChatRepository.delete(id);
        });
    }
}
exports.ChatService = ChatService;
