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
const razorpay_1 = __importDefault(require("razorpay"));
const crypto_1 = __importDefault(require("crypto"));
const PaymentRepository_1 = __importDefault(require("../repo/PaymentRepository"));
class PaymentService {
    constructor() {
        this.razorpay = new razorpay_1.default({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
    }
    createOrder(userId, vastuAstrologerId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.razorpay.orders.create({
                amount: amount * 100,
                currency: 'INR',
                receipt: `receipt_${Date.now()}`,
                payment_capture: true
            });
            const payment = yield PaymentRepository_1.default.createPayment({
                userId,
                vastuAstrologerId,
                amount,
                transactionId: order.id,
                paymentMethod: 'razorpay',
                razorpayOrderId: order.id,
            });
            return { order, payment };
        });
    }
    verifyPayment(details) {
        return __awaiter(this, void 0, void 0, function* () {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = details;
            const generated_signature = crypto_1.default
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                .digest('hex');
            const isValid = generated_signature === razorpay_signature;
            const updateData = isValid
                ? {
                    paymentStatus: 'completed',
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                }
                : { paymentStatus: 'failed' };
            yield PaymentRepository_1.default.updatePaymentStatus(razorpay_order_id, updateData);
            return isValid;
        });
    }
    getUserPayments(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentRepository_1.default.findAllByUser(userId);
        });
    }
    handleWebhookEvent(eventBody, receivedSignature) {
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
                yield PaymentRepository_1.default.updatePaymentStatus(payment.order_id, {
                    paymentStatus: 'authorized',
                    razorpayPaymentId: payment.id,
                });
            }
            if (event.event === 'payment.captured') {
                const payment = event.payload.payment.entity;
                yield PaymentRepository_1.default.updatePaymentStatus(payment.order_id, {
                    paymentStatus: 'captured',
                    razorpayPaymentId: payment.id,
                });
                console.log('✅ Webhook handled: Payment captured');
            }
            if (event.event === 'payment.failed') {
                const payment = event.payload.payment.entity;
                yield PaymentRepository_1.default.updatePaymentStatus(payment.order_id, {
                    paymentStatus: 'failed',
                    razorpayPaymentId: payment.id,
                });
                console.log('❌ Webhook handled: Payment failed');
            }
            return true;
        });
    }
    deleteUserPayments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentRepository_1.default.deletePayment(id);
        });
    }
    getAllUserPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentRepository_1.default.getAllPayments();
        });
    }
    updateAllUserPayments(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentRepository_1.default.updatePaymentById(id, data);
        });
    }
}
exports.default = PaymentService;
