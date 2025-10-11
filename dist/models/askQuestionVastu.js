"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
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
    question: {
        type: String,
        required: true
    },
    status: { type: String, enum: ["pending", "answered", "in_progress"], default: "pending" },
    vastuAstrologerId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    answer: { type: String, default: null },
}, {
    timestamps: true
});
const question = mongoose_1.default.model('vastuQuestion', questionSchema);
exports.default = question;
