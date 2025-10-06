import { MessageRepository } from '../../repo/chatRepositories/messageRepository';
import { Server } from "socket.io";
export class MessageService {
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

    static async sendMessage( msg: any) {
        const message = await MessageRepository.create(msg);
        //io.to(msg.chatId).emit("receive_message", message);
        return message;
    }

    static async getMessages(chatId: any) {
        return await MessageRepository.findByChatId(chatId);
    }

    static async deleteMessage(id: any) {
        return await MessageRepository.delete(id);
    }
}
