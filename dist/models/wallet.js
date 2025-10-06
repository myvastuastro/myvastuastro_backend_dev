"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
    type: { type: String, enum: ["credit", "debit"], required: true }, // credit (add), debit (spend)
    amount: { type: Number, required: true },
    description: { type: String },
    transactionId: { type: String },
    paymentMethod: { type: String, enum: ["razorpay", "wallet", "razorpayx"], default: "razorpay" },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    serviceType: { type: String, enum: ["vastuimportantcall", "vastuquestion", "remedies", "consultation", "astroquestion", "chat", "astrochat"], required: false },
    vastuAstrologerId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "vastuAstrologer" },
    astrologerId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "user", required: true, index: true },
    companyId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "company" },
    status: {
        type: String,
        enum: ["pending", "completed", "failed", "canceled", "success"],
        default: "pending",
    },
    date: { type: Date, default: Date.now },
}, { _id: false });
const walletSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "users" },
    astrologerId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "users" }, // astrologer
    vastuAstrologerId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "vastuAstrologer" },
    companyId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "company" },
    // 👇 Company wallet
    // company: { type: Boolean, default: false },
    balance: { type: Number, default: 0, min: 0 },
    transactions: [transactionSchema],
}, { timestamps: true });
// Ensure only one wallet per owner type
walletSchema.index({ userId: 1 }, { unique: true, sparse: true });
walletSchema.index({ astrologerId: 1 }, { unique: true, sparse: true });
walletSchema.index({ vastuAstrologerId: 1 }, { unique: true, sparse: true });
walletSchema.index({ company: 1 }, { unique: true, sparse: true }); // only one company wallet
// ✅ Optional: allow quick lookups by company flag
const walletModel = mongoose_1.default.model("wallet", walletSchema);
exports.default = walletModel;
