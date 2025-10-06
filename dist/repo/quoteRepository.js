"use strict";
// repositories/contactRepository.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteRepository = void 0;
const quote_1 = __importDefault(require("../models/quote"));
class QuoteRepository {
    static createQuote(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quote = yield quote_1.default.create(data);
                return { exists: false, message: "Submit successfully.", status: "success", data: quote };
            }
            catch (error) {
                console.error('Error creating question:', error);
                throw error;
            }
        });
    }
    // static async getContact(id: number): Promise<any | null> {
    //     return await Contact.findByPk(id);
    // }
    // static async updateContact(id: number, data: any): Promise<[number, any[]]> {
    //     return await Contact.update(data, {
    //         where: { id },
    //     });
    // }
    // static async deleteContact(id: number): Promise<number> {
    //     return await Contact.destroy({
    //         where: { id },
    //     });
    // }
    static getAllQuotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield quote_1.default.find({});
        });
    }
}
exports.QuoteRepository = QuoteRepository;
