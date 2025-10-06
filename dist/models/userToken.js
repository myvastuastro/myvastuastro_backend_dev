"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userTokenSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    astrologerId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user", // reference user collection for astrologers
        required: false
    },
    jwtToken: {
        type: String,
        required: false
    },
    deviceToken: {
        type: String,
        required: false
    },
    platform: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const userToken = mongoose_1.default.model('userToken', userTokenSchema);
exports.default = userToken;
