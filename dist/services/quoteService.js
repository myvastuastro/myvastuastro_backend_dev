"use strict";
// services/contactService.ts
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
exports.QuoteService = void 0;
const quoteRepository_1 = require("../repo/quoteRepository");
class QuoteService {
    static createQuote(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quote = yield quoteRepository_1.QuoteRepository.createQuote(data);
                return quote;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    // static async getContact(id: number): Promise<any> {
    //     try {
    //         const contact = await ContactRepository.getContact(id);
    //         if (!contact) throw new Error('Contact not found');
    //         return contact;
    //     } catch (error) {
    //         throw new Error('Could not get contact');
    //     }
    // }
    // static async updateContact(id: number, data: any): Promise<any> {
    //     try {
    //         const [rowsUpdated, [updatedContact]] = await ContactRepository.updateContact(id, data);
    //         if (rowsUpdated === 0) throw new Error('Contact not found');
    //         return updatedContact;
    //     } catch (error) {
    //         throw new Error('Could not update contact');
    //     }
    // }
    // static async deleteContact(id: number): Promise<any> {
    //     try {
    //         const rowsDeleted = await ContactRepository.deleteContact(id);
    //         if (rowsDeleted === 0) throw new Error('Contact not found');
    //         return { message: 'Contact deleted successfully' };
    //     } catch (error) {
    //         throw new Error('Could not delete contact');
    //     }
    // }
    static getAllQuotes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contacts = yield quoteRepository_1.QuoteRepository.getAllQuotes();
                return contacts;
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.QuoteService = QuoteService;
