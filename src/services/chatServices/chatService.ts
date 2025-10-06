import { ChatRepository } from '../../repo/chatRepositories/chatRepository';
import { NotificationService } from '../../utils/NotificationService';


const onlineAstrologers: { [userId: string]: any } = {};

export class ChatService {


    static async setOnline(userId: any, socketId: any, role: any) {
        if (role === "astrologer") onlineAstrologers[userId] = socketId;
    }

    static async removeOnline(userId: any) {
        delete onlineAstrologers[userId];
    }
    static async startChat(userId: any, astrologerId: any) {
        let chat = await ChatRepository.findActive(userId, astrologerId);
        console.log(chat)
        if (!chat) {
            chat = await ChatRepository.create({ userId, astrologerId, status: "active" });
        }
        await NotificationService.sendToAstrologer(astrologerId, chat._id, userId);
        return chat;
    }

    static async getChatById(id: any) {
        return await ChatRepository.findById(id);
    }

    static async getAllChats() {
        return await ChatRepository.findAll();
    }

    static async updateChat(id: any, data: any) {
        return await ChatRepository.update(id, data);
    }

    static async deleteChat(id: any) {
        return await ChatRepository.delete(id);
    }
}

