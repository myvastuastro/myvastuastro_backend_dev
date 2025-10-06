import { Request, Response } from 'express';
import { NotificationService } from '../services/notificationService';
export async function createNotification(req: Request, res: Response): Promise<void> {
    try {
        const notification = await NotificationService.createNotification(req.body);
        if (notification) {
            res.status(200).json({ message: 'Submit successful', data: notification, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: notification });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getNotification(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const notification = await NotificationService.getById(id);
        if (Notification) {
            res.status(200).json({ message: 'Find successful', data: Notification, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: Notification });
        }

    } catch (error) {
        res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateNotification(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const Notification = await NotificationService.updateNotification(id, req.body);
        if (Notification) {
            res.status(200).json({ message: 'Update successful', data: Notification, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: Notification });
        }
    } catch (error) {
        res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteNotification(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const Notification = await NotificationService.deleteNotification(id);
        if (Notification) {
            res.status(200).json({ message: 'Delete successful', data: Notification, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: Notification });
        }
    } catch (error) {
        res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllNotifications(req: Request, res: Response): Promise<void> {
    try {
        const notification = await NotificationService.getAll();
        if (notification) {
            res.status(200).json({ message: 'Find successful', data: notification, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: notification });
        }
    } catch (error) {
        res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
    }
}

