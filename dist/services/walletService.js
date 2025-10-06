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
exports.WalletService = void 0;
// services/walletService.ts
const walletRepository_1 = __importDefault(require("../repo/walletRepository"));
const razorpay_1 = __importDefault(require("razorpay"));
const crypto_1 = __importDefault(require("crypto"));
const axios_1 = __importDefault(require("axios"));
const razorpay = new razorpay_1.default({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});
class WalletService {
    static getWallet(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let wallet = yield walletRepository_1.default.getWallet(userId);
            if (!wallet) {
                wallet = yield walletRepository_1.default.createWallet(userId);
            }
            return wallet;
        });
    }
    // 3. Deduct Money
    static deductMoney(userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let wallet = yield walletRepository_1.default.getWallet(userId);
            if (!wallet)
                throw new Error("Wallet not found");
            if (wallet.balance < amount)
                throw new Error("Insufficient balance");
            const newBalance = wallet.balance - amount;
            yield walletRepository_1.default.addTransaction({
                userId,
                type: "debit",
                amount,
                description,
                astrologerId,
                vastuAstrologerId,
                companyId,
                status: "success",
                serviceType,
                date: new Date(),
            });
            wallet = yield walletRepository_1.default.updateBalance(userId, newBalance);
            return wallet;
        });
    }
    static getTransactions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield walletRepository_1.default.getTransactions(userId);
        });
    }
    static createOrder(userId, astrologerId, vastuAstrologerId, amount, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield razorpay.orders.create({
                amount: amount * 100,
                currency: 'INR',
                receipt: `receipt_${Date.now()}`,
                payment_capture: true
            });
            const payment = yield walletRepository_1.default.createPayment({
                userId,
                astrologerId,
                vastuAstrologerId,
                companyId,
                amount,
                transactionId: order.id,
                paymentMethod: 'razorpay',
                razorpayOrderId: order.id,
            });
            return { order, payment };
        });
    }
    static verifyPayment(details) {
        return __awaiter(this, void 0, void 0, function* () {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, amount, vastuAstrologerId, astrologerId, companyId } = details;
            const generated_signature = crypto_1.default
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                .digest('hex');
            const isValid = generated_signature === razorpay_signature;
            if (isValid) {
                // ✅ Push transaction & update balance
                yield walletRepository_1.default.completeTransaction(userId, razorpay_order_id, {
                    type: "credit",
                    amount,
                    transactionId: razorpay_payment_id,
                    paymentMethod: "razorpay",
                    razorpayOrderId: razorpay_order_id,
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                    status: "success",
                    vastuAstrologerId: vastuAstrologerId,
                    astrologerId: astrologerId,
                    companyId: companyId,
                    date: new Date(),
                });
            }
            else {
                yield walletRepository_1.default.updatePaymentStatus(razorpay_order_id, {
                    status: "failed",
                });
            }
            return isValid;
        });
    }
    static getUserPayments(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield walletRepository_1.default.findAllByUser(userId);
        });
    }
    static handleWebhookEvent(eventBody, receivedSignature) {
        return __awaiter(this, void 0, void 0, function* () {
            const expectedSignature = crypto_1.default
                .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
                .update(eventBody)
                .digest('hex');
            if (receivedSignature !== expectedSignature) {
                throw new Error('Invalid webhook signature');
            }
            const event = JSON.parse(eventBody.toString());
            if (event.event === 'payment.authorized') {
                const payment = event.payload.payment.entity;
                yield walletRepository_1.default.updatePaymentStatus(payment.order_id, {
                    paymentStatus: 'authorized',
                    razorpayPaymentId: payment.id,
                });
            }
            if (event.event === 'payment.captured') {
                const payment = event.payload.payment.entity;
                yield walletRepository_1.default.updatePaymentStatus(payment.order_id, {
                    paymentStatus: 'captured',
                    razorpayPaymentId: payment.id,
                });
                console.log('✅ Webhook handled: Payment captured');
            }
            if (event.event === 'payment.failed') {
                const payment = event.payload.payment.entity;
                yield walletRepository_1.default.updatePaymentStatus(payment.order_id, {
                    paymentStatus: 'failed',
                    razorpayPaymentId: payment.id,
                });
                console.log('❌ Webhook handled: Payment failed');
            }
            return true;
        });
    }
    static deleteUserPayments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield walletRepository_1.default.deletePayment(id);
        });
    }
    static getAllUserPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield walletRepository_1.default.getAllPayments();
        });
    }
    static updateAllUserPayments(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield walletRepository_1.default.updatePaymentById(id, data);
        });
    }
    // // Credit money to astrologer
    static creditAstrologerVastuAstrologerProfessional(astrologerId, vastuAstrologerId, companyId, amount, description, serviceType, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Example share percentages
            const astroShare = astrologerId ? amount * 0.4 : 0;
            const vastuShare = vastuAstrologerId ? amount * 0.4 : 0;
            const companyShare = amount - (astroShare + vastuShare);
            let astroWallet = null;
            let vastuWallet = null;
            let professionalWallet = null;
            // -------------------------
            // Credit Astrologer
            // -------------------------
            if (astrologerId) {
                astroWallet = yield walletRepository_1.default.getWalletForAstrologer(astrologerId);
                if (!astroWallet) {
                    astroWallet = yield walletRepository_1.default.createWalletForAstrologer(astrologerId, astroShare);
                }
                else {
                    astroWallet.balance += astroShare;
                    yield walletRepository_1.default.updateBalanceForAstrologer(astrologerId, astroWallet.balance);
                }
                yield walletRepository_1.default.addTransactionForAstrologer({
                    type: "credit",
                    amount: astroShare,
                    description: description || "Credited to astrologer wallet",
                    serviceType,
                    userId,
                    status: "completed",
                    date: new Date(),
                    astrologerId,
                    vastuAstrologerId,
                    companyId
                });
            }
            // -------------------------
            // Credit Vastu Astrologer
            // -------------------------
            if (vastuAstrologerId) {
                vastuWallet = yield walletRepository_1.default.getWalletForVastuAstrologer(vastuAstrologerId);
                if (!vastuWallet) {
                    vastuWallet = yield walletRepository_1.default.createWalletForVastuAstrologer(vastuAstrologerId, vastuShare);
                }
                else {
                    vastuWallet.balance += vastuShare;
                    yield walletRepository_1.default.updateBalanceForVastuAstrologer(vastuAstrologerId, vastuWallet.balance);
                }
                yield walletRepository_1.default.addTransactionForVastuAstrologer({
                    type: "credit",
                    amount: vastuShare,
                    description: "Credited to Vastu Astrologer wallet",
                    serviceType,
                    userId,
                    status: "completed",
                    date: new Date(),
                    astrologerId,
                    vastuAstrologerId,
                    companyId
                });
            }
            // -------------------------
            // Credit Company (always)
            // -------------------------
            let companyWallet = yield walletRepository_1.default.getCompanyWallet(companyId);
            if (!companyWallet) {
                companyWallet = yield walletRepository_1.default.createCompanyWallet(companyId, companyShare);
            }
            else {
                companyWallet.balance += companyShare;
                yield walletRepository_1.default.updateCompanyBalance(companyId, companyWallet.balance);
            }
            yield walletRepository_1.default.addTransactionForCompany({
                type: "credit",
                amount: companyShare,
                description: "Company share from user payment",
                serviceType,
                userId,
                status: "completed",
                date: new Date(),
                astrologerId,
                vastuAstrologerId,
                companyId
            });
            return { astroWallet, vastuWallet, professionalWallet, companyWallet };
        });
    }
    static getAllByAstrologerId(astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = yield walletRepository_1.default.getAllByAstrologerId(astrologerId);
            if (!wallet) {
                throw new Error("No wallet found for this astrologer");
            }
            return wallet; // only return transactions
        });
    }
    static getAllByCompanyId(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = yield walletRepository_1.default.getAllByCompanyId(companyId);
            if (!wallet) {
                throw new Error("No wallet found for this astrologer");
            }
            return wallet; // only return transactions
        });
    }
    // -------------------------
    // Pay astrologer: deduct user + credit astrologer
    // -------------------------
    static payAstrologerVastuAstrologerProfessional(userId, astrologerId, amount, description, serviceType, vastuAstrologerId, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            // 1. Deduct from user
            const userWallet = yield this.deductMoney(userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId);
            // 2. Credit astrologer
            const Wallets = yield this.creditAstrologerVastuAstrologerProfessional(astrologerId, vastuAstrologerId, companyId, amount, description, serviceType, userId);
            return { userWallet, Wallets };
        });
    }
    // -------------------------
    // Pay astrologer: deduct user + credit astrologer
    // -------------------------
    static withdrawEarnings(fullName, mobile, email, astrologerId, amount, bankName, accountNumber, ifscCode) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            // 1️⃣ Get wallet
            const wallet = yield walletRepository_1.default.getAllByAstrologerId(astrologerId);
            if (!wallet)
                throw new Error("Wallet not found");
            if (wallet.balance < amount)
                throw new Error("Insufficient wallet balance");
            // 2️⃣ Deduct balance immediately
            wallet.balance -= Number(amount);
            // 3️⃣ Create withdrawal transaction
            const transaction = {
                type: "debit",
                amount,
                description: `Withdrawal to bank (${bankName})`,
                transactionId: `WD-${Date.now()}`,
                paymentMethod: "razorpayx",
                astrologerId,
                status: "pending",
                date: new Date(),
            };
            wallet.transactions.push(transaction);
            yield wallet.save();
            // 4️⃣ Trigger RazorpayX Payout API
            try {
                const payoutPayload = {
                    account_number: process.env.RAZORPAYX_ACCOUNT_NUMBER,
                    amount: 1000,
                    currency: "INR",
                    mode: "NEFT",
                    purpose: "payout",
                    fund_account: {
                        account_type: "bank_account",
                        bank_account: {
                            name: fullName,
                            ifsc: ifscCode,
                            account_number: accountNumber
                        },
                        contact: {
                            name: fullName,
                            email: email,
                            contact: mobile,
                            type: "astrologer",
                            reference_id: transaction.transactionId,
                            notes: {
                                notes_key_1: astrologerId,
                                notes_key_2: "withdrawal"
                            }
                        }
                    },
                    queue_if_low_balance: true,
                    reference_id: transaction.transactionId,
                    narration: "Astrologer Withdrawal",
                    notes: {
                        notes_key_1: astrologerId,
                        notes_key_2: "withdrawal"
                    }
                };
                const payoutResponse = yield axios_1.default.post("https://api.razorpay.com/v1/payouts", payoutPayload, {
                    auth: {
                        username: process.env.RAZORPAY_KEY_ID,
                        password: process.env.RAZORPAY_KEY_SECRET,
                    },
                });
                // 5️⃣ Update transaction status to completed
                transaction.status = "completed";
                yield walletRepository_1.default.addTransactionForAstrologer(transaction);
                yield walletRepository_1.default.updateBalanceForAstrologer(astrologerId, wallet.balance);
                return {
                    status: "success",
                    message: "Withdrawal successful",
                    payoutId: payoutResponse.data.id,
                    transaction,
                };
            }
            catch (error) {
                console.error("❌ RazorpayX Payout Error:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                // 6️⃣ Revert balance on failure
                wallet.balance += Number(amount);
                transaction.status = "failed";
                yield wallet.save();
                throw new Error("Payout failed. Please try again later.");
            }
        });
    }
}
exports.WalletService = WalletService;
