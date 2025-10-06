import { MessageService } from '../../services/chatServices/messageService';
import { Request, Response } from 'express';


export async function sendMessage(req: Request, res: Response) {
    try {
        const { chatId, fromId, fromRole, text } = req.body;
        //const io = req.app.get('io'); // Make sure 'io' is set on app in your main server file

        const message = await MessageService.sendMessage({ chatId, fromId, fromRole, text });
        if (message) {
            res.status(200).json({ message: 'Send message successful', data: message, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: message });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getChatByChatId(req: Request, res: Response) {
    try {
        const messages = await MessageService.getMessages(req.params.chatId);
        if (messages) {
            res.status(200).json({ message: 'Find message successful', data: messages, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: messages });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const message = await MessageService.deleteMessage(req.params.id);
        if (message) {
            res.status(200).json({ message: 'Delete message successful', data: message, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: message });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

