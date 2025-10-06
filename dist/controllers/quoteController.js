"use strict";
// controllers/contactController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteController = void 0;
const quoteService_1 = require("../services/quoteService");
class QuoteController {
    static createQuote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield quoteService_1.QuoteService.createQuote(req.body);
                if (result) {
                    res.json(result);
                }
                else {
                    res.status(400).json({ message: 'Failed to create quote.' });
                }
            }
            catch (error) {
                res.status(500).send('Server error');
            }
        });
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
    static getAllQuotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contacts = yield quoteService_1.QuoteService.getAllQuotes();
                res.status(200).json(contacts);
            }
            catch (error) {
                res.status(500).send('Server error');
            }
        });
    }
}
exports.QuoteController = QuoteController;
