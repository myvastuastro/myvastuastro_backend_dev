"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vastuTipSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const vastuTip = mongoose_1.default.model('vastuTip', vastuTipSchema);
exports.default = vastuTip;
