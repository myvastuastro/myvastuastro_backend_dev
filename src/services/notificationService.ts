// services/contactService.ts

import { NotificationRepository } from '../repo/notificationRepository';
import { sendNotification } from '../utils/sendNotification';

export class NotificationService {
    static async createNotification(data: any): Promise<any> {
        try {
            const create = await NotificationRepository.saveNotification(data);
            const tokens = Array.isArray(data.deviceToken) ? data.deviceToken : [data.deviceToken];

            for (const deviceToken of tokens) {
                await sendNotification(deviceToken, data.title, data.body);
            }
             return create;
        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await NotificationRepository.getNotificationById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateNotification(id: string, data: any): Promise<any> {
        try {
            return await NotificationRepository.updateNotification(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteNotification(id: string): Promise<any> {
        try {
            return await NotificationRepository.deleteNotification(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await NotificationRepository.getAllNotification();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
