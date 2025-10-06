"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const notificationSchema = new mongoose_1.default.Schema({
    deviceToken: {
        type: [String],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });
// TTL index: 10 days = 864000 seconds
//notificationSchema.index({ sentAt: 1 }, { expireAfterSeconds: 864000 });
notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 10 * 24 * 60 * 60 });
const notification = mongoose_1.default.model('notification', notificationSchema);
exports.default = notification;
