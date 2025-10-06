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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawEarnings = exports.updateAllUserPayments = exports.getAllUserPayments = exports.deleteUserPayments = exports.handleWebhook = exports.getUserPayments = exports.verifyPayment = exports.createOrder = void 0;
exports.deductMoney = deductMoney;
exports.getTransactions = getTransactions;
exports.payAstrologerVastuAstrologerProfessional = payAstrologerVastuAstrologerProfessional;
exports.getAllByAstrologerId = getAllByAstrologerId;
exports.getAllByCompanyId = getAllByCompanyId;
const walletService_1 = require("../services/walletService");
function deductMoney(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId } = req.body;
            const wallet = yield walletService_1.WalletService.deductMoney(userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId);
            if (wallet) {
                res.status(200).json({ message: 'Amount deducted', data: wallet, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: wallet });
            }
        }
        catch (err) {
            res.status(500).json({ message: 'Failed', status: "fail", statusCode: 500, data: err });
        }
    });
}
function getTransactions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const transactions = yield walletService_1.WalletService.getTransactions(userId);
            if (transactions) {
                res.status(200).json({ message: 'Transaction history', data: transactions, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: transactions });
            }
        }
        catch (err) {
            res.status(500).json({ message: 'Failed', status: "fail", statusCode: 500, data: err });
        }
    });
}
//payment controller
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, amount, astrologerId, vastuAstrologerId, companyId } = req.body;
        const result = yield walletService_1.WalletService.createOrder(userId, astrologerId, vastuAstrologerId, amount, companyId);
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
        const isValid = yield walletService_1.WalletService.verifyPayment(req.body);
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
        const payments = yield walletService_1.WalletService.getUserPayments(userId);
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
        yield walletService_1.WalletService.handleWebhookEvent(req.body, signature);
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
        const payments = yield walletService_1.WalletService.deleteUserPayments(id);
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
        const payments = yield walletService_1.WalletService.getAllUserPayments();
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
        const payments = yield walletService_1.WalletService.updateAllUserPayments(id, req.body);
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
// export async function creditAstrologer(req: Request, res: Response): Promise<void> {
//   try {
//     const { astrologerId, amount, description, serviceType, userId, vastuAstrologerId } = req.body;
//     const wallet = await WalletService.creditAstrologer(astrologerId, amount, description, serviceType, userId, vastuAstrologerId);
//     res.status(200).json({ message: 'Amount credited to astrologer', data: wallet, status: "success", statusCode: 200 });
//   } catch (err: any) {
//     res.status(500).json({ message: 'Failed to credit astrologer', status: "fail", statusCode: 500, error: err.message });
//   }
// }
// export async function deductAstrologer(req: Request, res: Response): Promise<void> {
//   try {
//     const { astrologerId, amount, description, serviceType, userId } = req.body;
//     const wallet = await WalletService.deductAstrologer(astrologerId, amount, description, serviceType, userId);
//     res.status(200).json({ message: 'Amount deducted from astrologer', data: wallet, status: "success", statusCode: 200 });
//   } catch (err: any) {
//     res.status(500).json({ message: 'Failed to deduct astrologer', status: "fail", statusCode: 500, error: err.message });
//   }
// }
// Pay astrologer (user -> astrologer)
function payAstrologerVastuAstrologerProfessional(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, astrologerId, amount, description, serviceType, vastuAstrologerId, companyId } = req.body;
            const result = yield walletService_1.WalletService.payAstrologerVastuAstrologerProfessional(userId, astrologerId, amount, description, serviceType, vastuAstrologerId, companyId);
            res.status(200).json({ message: "Payment successful", data: result, status: "success", statusCode: 200 });
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Payment failed", status: "fail", statusCode: 500 });
        }
    });
}
function getAllByAstrologerId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { astrologerId } = req.params;
            const transactions = yield walletService_1.WalletService.getAllByAstrologerId(astrologerId);
            res.status(200).json({
                message: "Transactions fetched successfully",
                status: "success",
                statusCode: 200,
                data: transactions,
            });
        }
        catch (err) {
            res.status(500).json({
                message: "Error fetching astrologer transactions",
                status: "fail",
                statusCode: 500,
                error: err.message,
            });
        }
    });
}
function getAllByCompanyId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { companyId } = req.params;
            const transactions = yield walletService_1.WalletService.getAllByCompanyId(companyId);
            res.status(200).json({
                message: "Transactions fetched successfully",
                status: "success",
                statusCode: 200,
                data: transactions,
            });
        }
        catch (err) {
            res.status(500).json({
                message: "Error fetching astrologer transactions",
                status: "fail",
                statusCode: 500,
                error: err.message,
            });
        }
    });
}
const withdrawEarnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { astrologerId, amount, bankName, accountNumber, ifscCode, fullName, email, mobile } = req.body;
        if (!fullName || !mobile || !email || !astrologerId || !amount || !bankName || !accountNumber || !ifscCode) {
            return res.status(400).json({
                status: "fail",
                message: "All fields are required",
            });
        }
        const result = yield walletService_1.WalletService.withdrawEarnings(fullName, email, mobile, astrologerId, amount, bankName, accountNumber, ifscCode);
        return res.status(200).json({
            status: "success",
            message: "Withdrawal request submitted successfully",
            data: result,
        });
    }
    catch (error) {
        console.error("Withdraw Error:", error);
        res.status(500).json({
            status: "fail",
            message: error || "Something went wrong",
        });
    }
});
exports.withdrawEarnings = withdrawEarnings;
