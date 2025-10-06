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
exports.OrderRepository = void 0;
const mongoose_1 = require("mongoose");
const AstrologyOrder_1 = __importDefault(require("../../models/store/AstrologyOrder"));
const AstrologyOrder_2 = __importDefault(require("../../models/store/AstrologyOrder"));
class OrderRepository {
    static createOrder(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = new AstrologyOrder_2.default(data);
            return order.save();
        });
    }
    static getOrdersByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield AstrologyOrder_1.default.find({ userId: new mongoose_1.Types.ObjectId(userId) })
                .populate("items.productId")
                .populate("items.parentId")
                .populate("addressId")
                .sort({ createdAt: -1 })
                .lean();
            return orders.map(order => (Object.assign(Object.assign({}, order), { items: order.items.map(item => ({
                    productId: Object.assign({}, item.productId),
                    parentId: Object.assign({}, item.parentId),
                    quantity: item.quantity,
                    price: item.price
                })) })));
        });
    }
    static getOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield AstrologyOrder_1.default.findById(new mongoose_1.Types.ObjectId(orderId))
                .populate("items.productId")
                .populate("items.parentId")
                .populate("addressId")
                .lean();
            if (!order)
                return null;
            return Object.assign(Object.assign({}, order), { items: order.items.map(item => ({
                    productId: Object.assign({}, item.productId),
                    parentId: Object.assign({}, item.parentId),
                    quantity: item.quantity,
                    price: item.price
                })) });
        });
    }
    static updateStatus(orderId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyOrder_2.default.findByIdAndUpdate(orderId, { status }, { new: true });
        });
    }
}
exports.OrderRepository = OrderRepository;
