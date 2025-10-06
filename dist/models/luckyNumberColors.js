"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const luckyNumberColorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true },
    sign: { type: String, required: false },
    luckyNumber: { type: Number, required: false },
    luckyColor: { type: String, required: false }
}, {
    timestamps: true
});
const luckyNumberColor = mongoose_1.default.model('luckyNumberColor', luckyNumberColorSchema);
exports.default = luckyNumberColor;
