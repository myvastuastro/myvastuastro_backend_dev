"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const questionAstroSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: String, required: true },
    birthTime: { type: String, required: true },
    birthPlace: { type: String, required: true },
    question: { type: String, required: true },
    image: { type: String, required: false },
    status: { type: String, enum: ["pending", "answered", "in_progress"], default: "pending" },
    astrologerId: { type: String, default: null },
    answer: { type: String, default: null },
}, {
    timestamps: true
});
const questionAstro = mongoose_1.default.model('astroQuestion', questionAstroSchema);
exports.default = questionAstro;
