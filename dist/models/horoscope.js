"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const horoscopeSchema = new mongoose_1.default.Schema({
    sign: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    luckyNumber: {
        type: String,
        required: true
    },
    luckyColor: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
horoscopeSchema.index({ sign: 1, date: 1 }, { unique: true });
const horoscope = mongoose_1.default.model('horoscope', horoscopeSchema);
exports.default = horoscope;
