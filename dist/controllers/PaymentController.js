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
exports.updateAllUserPayments = exports.getAllUserPayments = exports.deleteUserPayments = exports.handleWebhook = exports.getUserPayments = exports.verifyPayment = exports.createOrder = void 0;
const PaymentService_1 = __importDefault(require("../services/PaymentService"));
const paymentService = new PaymentService_1.default();
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, vastuAstrologerId, amount } = req.body;
        const result = yield paymentService.createOrder(userId, vastuAstrologerId, amount);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to create order', error: err });
    }
});
exports.createOrder = createOrder;
const verifyPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const isValid = yield paymentService.verifyPayment(req.body);
        if (isValid) {
            // const mailPayload = {
            //   to: req.body.email,
            //   subject: 'Payment Successful',
            //   html: `<p>Your payment for ₹${req.body.amount} was successful. Thank you!</p>`,
            // };
            // await sendMailJob(mailPayload);
            res.status(200).json({ message: 'Payment verified successfully', status: 'success', statusCode: 200 });
        }
        else {
            res.status(400).json({ message: 'Payment verification failed', status: 'fail', statusCode: 400 });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error verifying payment', error: err, status: 'fail', statusCode: 500 });
    }
});
exports.verifyPayment = verifyPayment;
const getUserPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const payments = yield paymentService.getUserPayments(userId);
        console.log("sunder", payments);
        if (payments.length != 0) {
            res.status(200).json({ message: 'Payment found successfully', status: 'success', statusCode: 200, data: payments });
        }
        else {
            res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching payments', error: err });
    }
});
exports.getUserPayments = getUserPayments;
const handleWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signature = req.headers['x-razorpay-signature'];
        yield paymentService.handleWebhookEvent(req.body, signature);
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ success: false, error: err });
    }
});
exports.handleWebhook = handleWebhook;
const deleteUserPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payments = yield paymentService.deleteUserPayments(id);
        if (payments) {
            res.status(200).json({ message: 'Payment deleted successfully', status: 'success', statusCode: 200, data: payments });
        }
        else {
            res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting payments', error: err });
    }
});
exports.deleteUserPayments = deleteUserPayments;
const getAllUserPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payments = yield paymentService.getAllUserPayments();
        if (payments.length != 0) {
            res.status(200).json({ message: 'Payment found successfully', status: 'success', statusCode: 200, data: payments });
        }
        else {
            res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching payments', error: err });
    }
});
exports.getAllUserPayments = getAllUserPayments;
const updateAllUserPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payments = yield paymentService.updateAllUserPayments(id, req.body);
        if (payments) {
            res.status(200).json({ message: 'Payment updated successfully', status: 'success', statusCode: 200, data: payments });
        }
        else {
            res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating payments', error: err });
    }
});
exports.updateAllUserPayments = updateAllUserPayments;
