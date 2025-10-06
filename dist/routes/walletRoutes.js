"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const walletController_1 = require("../controllers/walletController");
const router = (0, express_1.Router)();
//wallet routes
router.post("/deduct", walletController_1.deductMoney);
router.get("/transactions/:userId", walletController_1.getTransactions);
//payment routes
router.post('/create-order', walletController_1.createOrder);
router.post('/verify', walletController_1.verifyPayment);
router.get('/payment/:userId', walletController_1.getUserPayments);
router.delete('/payment/delete/:id', walletController_1.deleteUserPayments);
router.get('/payment/transactions/getAll', walletController_1.getAllUserPayments);
router.put('/payment/update/:id', walletController_1.updateAllUserPayments);
// New astrologer endpoints
// router.post("/astrologer/credit", creditAstrologer);
// router.post("/astrologer/deduct", deductAstrologer);
router.post("/astrologer/pay", walletController_1.payAstrologerVastuAstrologerProfessional);
router.get("/astrologer/:astrologerId/transactions", walletController_1.getAllByAstrologerId);
//withdrawal
router.post("/withdraw", walletController_1.withdrawEarnings);
//company
router.get("/company/:companyId/transactions", walletController_1.getAllByCompanyId);
exports.default = router;
