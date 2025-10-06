"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const talktoadvisorSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    appointment: [
        {
            date: {
                type: Date, // e.g. 2025-05-14
                required: true
            },
            times: [
                {
                    type: String // e.g. "10:00 AM", "3:30 PM"
                }
            ]
        }
    ]
}, {
    timestamps: true
});
const question = mongoose_1.default.model('vastuTalkToAdvisor', talktoadvisorSchema);
exports.default = question;
