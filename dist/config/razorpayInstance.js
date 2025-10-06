"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.razorpayInstance = void 0;
// razorpayInstance.ts
const razorpay_1 = __importDefault(require("razorpay"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.razorpayInstance = new razorpay_1.default({
    key_id: process.env.RAZORPAY_KEY_ID, // from Razorpay Dashboard
    key_secret: process.env.RAZORPAY_KEY_SECRET, // from Razorpay Dashboard
});
