import { ChatService } from '../../services/chatServices/chatService';
import { Request, Response } from 'express';



export async function startChat(req: Request, res: Response) {
    try {
        const { userId, astrologerId } = req.body;
        const chat = await ChatService.startChat(userId, astrologerId);

        if (chat) {
            res.status(200).json({ message: 'Submit successful', data: chat, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const chat = await ChatService.getChatById(req.params.id);
        if (chat) {
            res.status(200).json({ message: 'Find successful', data: chat, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const chats = await ChatService.getAllChats();
        if (chats) {
            res.status(200).json({ message: 'Find successful', data: chats, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chats });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function updateById(req: Request, res: Response) {
    try {
        const chat = await ChatService.updateChat(req.params.id, req.body);
        if (chat) {
            res.status(200).json({ message: 'Update successful', data: chat, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function deleteById(req: Request, res: Response) {
     try {
        const chat = await ChatService.deleteChat(req.params.id);
        if (chat) {
            res.status(200).json({ message: 'Delete successful', data: chat, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: chat });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

