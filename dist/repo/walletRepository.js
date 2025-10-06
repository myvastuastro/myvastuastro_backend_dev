"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// repositories/walletRepository.ts
const wallet_1 = __importDefault(require("../models/wallet"));
class WalletRepository {
    // wallet operations
    static getWallet(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ userId });
        });
    }
    static getWalletForAstrologer(astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ astrologerId });
        });
    }
    static createWallet(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return wallet_1.default.create({ userId, balance: 0, transactions: [] });
        });
    }
    static createWalletForAstrologer(astrologerId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return wallet_1.default.create({ astrologerId, balance: amount, transactions: [] });
        });
    }
    static updateBalance(userId, newBalance) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ userId }, { balance: newBalance }, { new: true });
        });
    }
    static updateBalanceForAstrologer(astrologerId, newBalance) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ astrologerId }, { balance: newBalance }, { new: true });
        });
    }
    static addTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ userId: data.userId }, { $push: { transactions: data } }, { new: true });
        });
    }
    //astrologer
    static addTransactionForAstrologer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionData = {
                type: data.type,
                amount: data.amount,
                description: data.description,
                serviceType: data.serviceType,
                userId: data.userId || null,
                status: data.status,
                date: data.date || new Date(),
                astrologerId: data.astrologerId,
                vastuAstrologerId: data.vastuAstrologerId || null,
                companyId: data.companyId || null
            };
            return yield wallet_1.default.findOneAndUpdate({ astrologerId: data.astrologerId }, { $push: { transactions: transactionData } }, { new: true });
        });
    }
    static getAllByAstrologerId(astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ astrologerId });
        });
    }
    static getTransactions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.find({ userId }).sort({ createdAt: -1 });
        });
    }
    //payment operations
    static createPayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ userId: data.userId }, {
                $push: {
                    transactions: {
                        type: "credit",
                        amount: data.amount,
                        transactionId: data.transactionId,
                        paymentMethod: data.paymentMethod,
                        razorpayOrderId: data.razorpayOrderId,
                        status: "pending",
                        vastuAstrologerId: data.vastuAstrologerId,
                        astrologerId: data.astrologerId
                    },
                },
                $setOnInsert: {
                    userId: data.userId,
                    balance: 0, // balance updated only after verification
                },
            }, { new: true, upsert: true });
        });
    }
    static completeTransaction(userId, orderId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ userId, "transactions.razorpayOrderId": orderId }, {
                $set: {
                    "transactions.$.status": data.status,
                    "transactions.$.razorpayPaymentId": data.razorpayPaymentId,
                    "transactions.$.razorpaySignature": data.razorpaySignature,
                    "transactions.$.vastuAstrologerId": data.vastuAstrologerId || null,
                    "transactions.$.transactionId": data.transactionId, // keep original or Razorpay payment ID
                    "transactions.$.type": data.type || "credit",
                    "transactions.$.amount": data.amount,
                    "transactions.$.paymentMethod": data.paymentMethod || "razorpay",
                    "transactions.$.date": data.date || new Date(),
                    "transactions.$.astrologerId": data.astrologerId || null,
                },
                $inc: { balance: data.status === "success" ? data.amount : 0 },
            }, { new: true });
        });
    }
    static findByOrderId(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ razorpayOrderId: orderId });
        });
    }
    static updatePaymentStatus(orderId, update) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ razorpayOrderId: orderId }, { $set: update }, { new: true });
        });
    }
    static findAllByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.find({ userId }).populate('vastuAstrologerId');
        });
    }
    static getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.find({});
        });
    }
    static deletePayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findByIdAndDelete(id);
        });
    }
    static updatePaymentById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
    // Company Wallet
    static getCompanyWallet(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ companyId });
        });
    }
    static createCompanyWallet(companyId_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, balance = 0) {
            return yield wallet_1.default.create({ companyId, company: true, balance, transactions: [] });
        });
    }
    static updateCompanyBalance(companyId, balance) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ companyId }, { $set: { balance } }, { new: true });
        });
    }
    static addTransactionForCompany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionData = {
                type: data.type,
                amount: data.amount,
                description: data.description,
                serviceType: data.serviceType,
                userId: data.userId || null,
                status: data.status,
                date: data.date || new Date(),
                astrologerId: data.astrologerId,
                vastuAstrologerId: data.vastuAstrologerId || null,
                companyId: data.companyId || null
            };
            return yield wallet_1.default.findOneAndUpdate({ companyId: data.companyId }, // 👈 target company wallet
            { $push: { transactions: transactionData } }, { new: true });
        });
    }
    // Delete Company Wallet
    static deleteCompanyWallet(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndDelete({ companyId });
        });
    }
    // Get All Companies Wallets
    static getAllCompanyWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.find({ company: true });
        });
    }
    static getAllByCompanyId(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ companyId });
        });
    }
    //vastuastrologer
    static getWalletForVastuAstrologer(vastuAstrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOne({ vastuAstrologerId });
        });
    }
    static createWalletForVastuAstrologer(vastuAstrologerId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return wallet_1.default.create({ vastuAstrologerId, balance: amount, transactions: [] });
        });
    }
    static updateBalanceForVastuAstrologer(vastuAstrologerId, newBalance) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_1.default.findOneAndUpdate({ vastuAstrologerId }, { balance: newBalance }, { new: true });
        });
    }
    static addTransactionForVastuAstrologer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionData = {
                type: data.type,
                amount: data.amount,
                description: data.description,
                serviceType: data.serviceType,
                userId: data.userId || null,
                status: data.status,
                date: data.date || new Date(),
                astrologerId: data.astrologerId,
                vastuAstrologerId: data.vastuAstrologerId || null,
                companyId: data.companyId || null
            };
            return yield wallet_1.default.findOneAndUpdate({ vastuAstrologerId: data.vastuAstrologerId }, { $push: { transactions: transactionData } }, { new: true });
        });
    }
}
exports.default = WalletRepository;
