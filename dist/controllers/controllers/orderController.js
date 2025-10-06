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
exports.checkout = checkout;
exports.getUserOrders = getUserOrders;
exports.getOrderById = getOrderById;
exports.updateOrderStatus = updateOrderStatus;
const orderService_1 = require("../../services/services/orderService");
function checkout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, addressId, paymentMethod } = req.body;
            const order = yield orderService_1.OrderService.checkout(userId, addressId, paymentMethod);
            res.status(201).json({
                message: "Order placed successfully",
                data: order,
                status: "success",
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message, status: "error" });
        }
    });
}
// export async function createOrder(req: Request, res: Response) {
//   try {
//     const order = await OrderService.createOrderService(req.body);
//     res.status(201).json({ message: "Order placed successfully", data: order });
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// }
function getUserOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const orders = yield orderService_1.OrderService.getUserOrdersService(userId);
            res.json({ message: "Orders fetched successfully", data: orders });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getOrderById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const order = yield orderService_1.OrderService.getOrderByIdService(id);
            res.json({ message: "Order fetched successfully", data: order });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function updateOrderStatus(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const updatedOrder = yield orderService_1.OrderService.updateOrderStatusService(id, status);
            res.json({ message: "Order status updated", data: updatedOrder });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
