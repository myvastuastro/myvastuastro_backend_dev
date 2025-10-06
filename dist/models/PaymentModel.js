"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PaymentSchema = new mongoose_1.default.Schema({
    type: { type: String, enum: ["credit", "debit"], required: true }, // credit (add), debit (spend)
    vastuAstrologerId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'vastuAstrogler', // Product model reference
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'canceled'],
        default: 'pending',
    },
    transactionId: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['razorpay'],
        required: true,
    },
    razorpayOrderId: {
        type: String,
        required: true,
    },
    razorpayPaymentId: {
        type: String,
        required: false,
    },
    razorpaySignature: {
        type: String,
        required: false,
    },
    description: { type: String },
    serviceType: { type: String, enum: ["question", "remedy", "consultation"], required: true },
}, {
    timestamps: true
});
const walletSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "users", required: true },
    // running balance for this user
    balance: { type: Number, default: 0 },
    // all payment + wallet transaction history
    transactions: [PaymentSchema],
}, { timestamps: true });
const PaymentModel = mongoose_1.default.model('payment', PaymentSchema);
exports.default = PaymentModel;
