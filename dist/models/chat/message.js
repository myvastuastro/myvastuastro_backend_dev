"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    chatId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Chat' },
    fromId: { type: String, required: true },
    fromRole: { type: String, enum: ['user', 'astrologer'], required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const message = mongoose_1.default.model('astrologyMessage', messageSchema);
exports.default = message;
