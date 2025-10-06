import Chat from '../../models/chat/chat';

export class ChatRepository {

    static async create(data: any) {
        return await Chat.create(data);
    }

    static async findById(id: any) {
        return await Chat.findById(id);
    }

    static async findAll() {
        return await Chat.find();
    }

    static async findActive(userId: string, astrologerId: string) {
        return await Chat.findOne({ userId, astrologerId, status: "active" });
    }

    static async update(id: any, data: any) {
        return await Chat.findByIdAndUpdate(id, data, { new: true });
    }

    static async delete(id: any) {
        return await Chat.findByIdAndDelete(id);
    }
}