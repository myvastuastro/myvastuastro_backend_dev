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
const PaymentModel_1 = __importDefault(require("../models/PaymentModel"));
class PaymentRepository {
    static createPayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = new PaymentModel_1.default(data);
            return yield payment.save();
        });
    }
    static findByOrderId(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentModel_1.default.findOne({ razorpayOrderId: orderId });
        });
    }
    static updatePaymentStatus(orderId, update) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentModel_1.default.findOneAndUpdate({ razorpayOrderId: orderId }, { $set: update }, { new: true });
        });
    }
    static findAllByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentModel_1.default.find({ userId }).populate('vastuAstrologerId');
        });
    }
    static getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentModel_1.default.find({});
        });
    }
    static deletePayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentModel_1.default.findByIdAndDelete(id);
        });
    }
    static updatePaymentById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PaymentModel_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
}
exports.default = PaymentRepository;
