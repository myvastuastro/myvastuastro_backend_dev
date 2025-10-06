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
exports.MessageService = void 0;
const messageRepository_1 = require("../../repo/chatRepositories/messageRepository");
class MessageService {
    //    static async sendMessage(
    //     io: Server,
    //     msg: {
    //         chatId: string;
    //         fromId: string;
    //         fromRole: "user" | "astrologer";
    //         text: string;
    //     }
    // ) {
    //     const savedMessage = await MessageRepository.create(msg);
    //     io.to(msg.chatId).emit("new_message", savedMessage);
    //     return savedMessage;
    // }
    // static async sendMessage(chatId: any, fromId: any, fromRole: any, text: any) {
    //     return await MessageRepository.create({ chatId, fromId, fromRole, text });
    // }
    static sendMessage(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield messageRepository_1.MessageRepository.create(msg);
            //io.to(msg.chatId).emit("receive_message", message);
            return message;
        });
    }
    static getMessages(chatId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messageRepository_1.MessageRepository.findByChatId(chatId);
        });
    }
    static deleteMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messageRepository_1.MessageRepository.delete(id);
        });
    }
}
exports.MessageService = MessageService;
