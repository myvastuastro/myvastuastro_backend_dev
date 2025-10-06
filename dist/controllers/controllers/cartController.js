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
exports.addCart = addCart;
exports.getCart = getCart;
exports.removeCart = removeCart;
exports.updateQuantity = updateQuantity;
exports.clearCart = clearCart;
const cartService_1 = require("../../services/services/cartService");
function addCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, productId, parentId, quantity } = req.body;
            console.log("Request Body:", req.body); // Debugging line
            const cart = yield cartService_1.CartService.addCart(userId, productId, parentId, quantity);
            if (cart) {
                res.status(200).json({ message: 'Submit successful', data: cart, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const cartService = yield cartService_1.CartService.getCart(userId);
            if (cartService) {
                res.status(200).json({ message: 'Find successful', data: cartService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cartService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function removeCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, productId, parentId } = req.body;
            const cart = yield cartService_1.CartService.removeCart(userId, productId, parentId);
            if (cart) {
                res.status(200).json({ message: 'Remove successful', data: cart, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateQuantity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, productId, parentId, action } = req.body;
            const cart = yield cartService_1.CartService.updateQuantity(userId, productId, parentId, action);
            if (cart) {
                res.status(200).json({ message: 'Update successful', data: cart, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function clearCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.body;
            const cart = yield cartService_1.CartService.clearCart(userId);
            if (cart) {
                res.status(200).json({ message: 'Find successful', data: cart, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
