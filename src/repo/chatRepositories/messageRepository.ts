import Message from '../../models/chat/message'

export class MessageRepository {
 static async create(data: any) {
    return await Message.create(data);
  }

 static async findByChatId(chatId: any) {
    return await Message.find({ chatId }).sort({ createdAt: 1 });
  }

 static async delete(id: any) {
    return await Message.findByIdAndDelete(id);
  }
}