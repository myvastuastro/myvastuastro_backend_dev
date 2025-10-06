"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const remediesQASchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "users", required: true },
    name: { type: String, required: true }, // User's full name
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dob: { type: Date, required: true }, // Date of birth
    birthTime: { type: String, required: true }, // Birth time
    birthPlace: { type: String, required: true }, // Birth place (city)
    latitude: { type: Number, required: true }, // Latitude for Kundli calculation
    longitude: { type: Number, required: true }, // Longitude for Kundli calculation
    question: { type: String, required: true },
    answer: { type: String, default: null },
    status: { type: String, enum: ["pending", "answered"], default: "pending" },
}, {
    timestamps: true
});
const remediesQA = mongoose_1.default.model('remediesQA', remediesQASchema);
exports.default = remediesQA;
