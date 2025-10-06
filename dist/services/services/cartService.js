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
exports.CartService = void 0;
const mongoose_1 = require("mongoose");
const cartRepo_1 = require("../../repo/repositories/cartRepo");
class CartService {
    static addCart(userId_1, productId_1, parentId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, productId, parentId, quantity = 1) {
            let cart = yield cartRepo_1.CartRepository.getCartByUser(userId);
            if (!cart)
                cart = yield cartRepo_1.CartRepository.createCart(userId);
            const existingItem = Array.isArray(cart === null || cart === void 0 ? void 0 : cart.items)
                ? cart.items.find((item) => {
                    var _a, _b;
                    return ((_a = item.productId) === null || _a === void 0 ? void 0 : _a._id.toString()) === productId &&
                        ((_b = item.parentId) === null || _b === void 0 ? void 0 : _b._id.toString()) === parentId;
                })
                : undefined;
            console.log("existingItem", existingItem);
            if (existingItem) {
                existingItem.quantity += quantity;
            }
            else {
                cart.items.push({
                    productId: new mongoose_1.Types.ObjectId(productId),
                    parentId: new mongoose_1.Types.ObjectId(parentId),
                    quantity,
                });
            }
            return yield cartRepo_1.CartRepository.updateCart(userId, cart.items);
        });
    }
    static getCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let cart = yield cartRepo_1.CartRepository.getCartByUser(userId);
            if (!cart) {
                cart = yield cartRepo_1.CartRepository.createCart(userId);
            }
            return cart;
        });
    }
    static removeCart(userId, productId, parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield cartRepo_1.CartRepository.getCartByUser(userId);
            if (!cart)
                return null;
            cart.items = cart.items.filter((item) => { var _a, _b, _c, _d; return !(((_b = (_a = item.productId) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString()) === productId && ((_d = (_c = item.parentId) === null || _c === void 0 ? void 0 : _c._id) === null || _d === void 0 ? void 0 : _d.toString()) === parentId); });
            return yield cartRepo_1.CartRepository.updateCart(userId, cart.items);
        });
    }
    static updateQuantity(userId, productId, parentId, action) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield cartRepo_1.CartRepository.getCartByUser(userId);
            if (!cart)
                return null;
            console.log("cart before update:", JSON.stringify(cart, null, 2));
            const itemIndex = cart.items.findIndex((item) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                const prodId = (_c = (_b = (_a = item.productId) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : (_d = item.productId) === null || _d === void 0 ? void 0 : _d.toString();
                const parId = (_g = (_f = (_e = item.parentId) === null || _e === void 0 ? void 0 : _e._id) === null || _f === void 0 ? void 0 : _f.toString()) !== null && _g !== void 0 ? _g : (_h = item.parentId) === null || _h === void 0 ? void 0 : _h.toString();
                return prodId === productId && parId === parentId;
            });
            if (itemIndex === -1) {
                console.log("Item not found in cart");
                return cart;
            }
            const item = cart.items[itemIndex];
            if (action === "increase") {
                item.quantity += 1;
            }
            else if (action === "decrease") {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                }
                else {
                    // quantity = 1 → user clicks decrease → remove item
                    cart.items.splice(itemIndex, 1);
                }
            }
            const updatedCart = yield cart.save();
            return yield updatedCart.populate("items.productId items.parentId");
        });
    }
    // static async updateQuantity(
    //     userId: string,
    //     productId: string,
    //     parentId: string,
    //     action: "increase" | "decrease" | "remove"
    // ) {
    //     const cart = await CartRepository.getCartByUser(userId);
    //     if (!cart) return null;
    //     console.log("cart before update:", JSON.stringify(cart, null, 2));
    //     // Safe comparison: works for ObjectId or populated object
    //     const item = cart.items.find((item: any) => {
    //         const prodId =
    //             item.productId?._id?.toString() ?? item.productId?.toString();
    //         const parId =
    //             item.parentId?._id?.toString() ?? item.parentId?.toString();
    //         return prodId === productId && parId === parentId;
    //     });
    //     if (!item) {
    //         console.log("Item not found in cart");
    //         return cart;
    //     }
    //     if (action === "increase") {
    //         item.quantity += 1;
    //     } else if (action === "decrease" && item.quantity > 1) {
    //         item.quantity -= 1;
    //     } 
    //     // Save cart back
    //     const updatedCart = await cart.save();
    //     // repopulate so response has product + parent details
    //     return await updatedCart.populate("items.productId items.parentId");
    // }
    static clearCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cartRepo_1.CartRepository.clearCart(userId);
        });
    }
}
exports.CartService = CartService;
