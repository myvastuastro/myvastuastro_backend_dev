// controllers/contactController.ts

import { Request, Response } from 'express';
import {QuoteService}  from '../services/quoteService';
export class QuoteController {
    static async createQuote(req: Request, res: Response): Promise<void> {
        try {
            const result = await QuoteService.createQuote(req.body);
            if (result) {
                res.json(result);
            } else {
                res.status(400).json({ message: 'Failed to create quote.' });
            }
           
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    // static async getContact(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         const contact = await ContactService.getContact(parseInt(id));
    //         res.status(200).json(contact);
    //     } catch (error) {
    //         res.status(404).send('Contact not found');
    //     }
    // }

    // static async updateContact(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         const contact = await ContactService.updateContact(parseInt(id), req.body);
    //         res.status(200).json(contact);
    //     } catch (error) {
    //         res.status(404).send('Contact not found');
    //     }
    // }

    // static async deleteContact(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         await ContactService.deleteContact(parseInt(id));
    //         res.status(204).end();
    //     } catch (error) {
    //         res.status(404).send('Contact not found');
    //     }
    // }

    static async getAllQuotes(req: Request, res: Response): Promise<void> {
        try {
            const contacts = await QuoteService.getAllQuotes();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
}
