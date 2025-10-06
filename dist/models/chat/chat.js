"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chatSchema = new mongoose_1.default.Schema({
    userId: String,
    astrologerId: String,
    startedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'active', 'closed'], default: 'pending' }
});
const chat = mongoose_1.default.model('astrologyChat', chatSchema);
exports.default = chat;
