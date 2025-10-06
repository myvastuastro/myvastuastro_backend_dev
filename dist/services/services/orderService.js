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
exports.OrderService = void 0;
const cartRepo_1 = require("../../repo/repositories/cartRepo");
const orderRepo_1 = require("../../repo/repositories/orderRepo");
class OrderService {
    static checkout(userId, addressId, paymentMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get cart
            const cart = yield cartRepo_1.CartRepository.getCartByUser(userId);
            if (!cart || cart.items.length === 0) {
                throw new Error("Cart is empty");
            }
            // Calculate total using discountPrice if valid
            const totalAmount = cart.items.reduce((acc, item) => {
                var _a, _b;
                const price = ((_a = item.productId) === null || _a === void 0 ? void 0 : _a.discountPrice) && item.productId.discountPrice > 0
                    ? item.productId.discountPrice
                    : ((_b = item.productId) === null || _b === void 0 ? void 0 : _b.price) || 0;
                return acc + item.quantity * price;
            }, 0);
            // Create order
            const order = yield orderRepo_1.OrderRepository.createOrder({
                userId,
                items: cart.items.map((item) => {
                    var _a;
                    const price = ((_a = item.productId) === null || _a === void 0 ? void 0 : _a.discountPrice) && item.productId.discountPrice > 0
                        ? item.productId.discountPrice
                        : item.productId.price || 0;
                    return {
                        productId: item.productId._id,
                        parentId: item.parentId._id,
                        quantity: item.quantity,
                        price
                    };
                }),
                totalAmount,
                addressId,
                paymentMethod,
                status: paymentMethod === "COD" ? "pending" : "paid"
            });
            // Clear cart
            yield cartRepo_1.CartRepository.updateCart(userId, []);
            return order;
        });
    }
    // static async checkout(userId: string, addressId: string, paymentMethod: "COD" | "ONLINE") {
    //   // Get cart
    //   const cart = await CartRepository.getCartByUser(userId);
    //   if (!cart || cart.items.length === 0) {
    //     throw new Error("Cart is empty");
    //   }
    //   // Calculate total
    //    const totalAmount = cart.items.reduce(
    //   (acc: number, item: any) => {
    //     const price = item.productId?.discountPrice || item.productId?.price || 0;
    //     return acc + item.quantity * price;
    //   },
    //   0
    // );
    //   // Create order
    //   const order = await OrderRepository.createOrder({
    //     userId,
    //     items: cart.items.map((item: any) => ({
    //       productId: item.productId._id,
    //       parentId: item.parentId._id,
    //       quantity: item.quantity,
    //       price: item.productId?.discountPrice || item.productId.price || 0
    //     })),
    //     totalAmount,
    //     addressId,
    //     paymentMethod,
    //     status: paymentMethod === "COD" ? "pending" : "paid"
    //   });
    //   await CartRepository.updateCart(userId, []);
    //   return order;
    // }
    static getUserOrdersService(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orderRepo_1.OrderRepository.getOrdersByUser(userId);
        });
    }
    static getOrderByIdService(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orderRepo_1.OrderRepository.getOrderById(orderId);
        });
    }
    static updateOrderStatusService(orderId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orderRepo_1.OrderRepository.updateStatus(orderId, status);
        });
    }
}
exports.OrderService = OrderService;
