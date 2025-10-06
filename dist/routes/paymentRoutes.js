"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PaymentController_1 = require("../controllers/PaymentController");
const router = express_1.default.Router();
router.post('/create-order', PaymentController_1.createOrder);
router.post('/verify', PaymentController_1.verifyPayment);
router.get('/user/:userId', PaymentController_1.getUserPayments);
router.delete('/user/delete/:id', PaymentController_1.deleteUserPayments);
router.get('/user/all', PaymentController_1.getAllUserPayments);
router.put('/user/update/:id', PaymentController_1.updateAllUserPayments);
exports.default = router;
