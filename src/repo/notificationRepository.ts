import Notification from '../models/notificationModel';
export class NotificationRepository {
    static async saveNotification(data: any): Promise<any> {
        return await Notification.create(data);
    }

    static async getAllNotification(): Promise<any[]> {
        return await Notification.find();
    }
    static async deleteNotification(id: string): Promise<any> {
        return await Notification.findByIdAndDelete(id);
    }
    static async getNotificationById(id: string): Promise<any> {
        return await Notification.findById(id);
    }
    static async updateNotification(id: string, data: any): Promise<any> {
        return await Notification.findByIdAndUpdate(id, data, { new: true });  
    }
}
