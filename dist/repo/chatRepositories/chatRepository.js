"use strict";
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
exports.ChatRepository = void 0;
const chat_1 = __importDefault(require("../../models/chat/chat"));
class ChatRepository {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chat_1.default.create(data);
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chat_1.default.findById(id);
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chat_1.default.find();
        });
    }
    static findActive(userId, astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chat_1.default.findOne({ userId, astrologerId, status: "active" });
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chat_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield chat_1.default.findByIdAndDelete(id);
        });
    }
}
exports.ChatRepository = ChatRepository;
