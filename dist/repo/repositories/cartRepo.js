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
exports.CartRepository = void 0;
const mongoose_1 = require("mongoose");
const AstrologyCart_1 = __importDefault(require("../../models/store/AstrologyCart"));
class CartRepository {
    static createCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyCart_1.default.create({ userId, items: [] });
        });
    }
    static getCartByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyCart_1.default.findOne({ userId: new mongoose_1.Types.ObjectId(userId) })
                .populate("items.parentId")
                .populate("items.productId");
        });
    }
    static updateCart(userId, items) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyCart_1.default.findOneAndUpdate({ userId: new mongoose_1.Types.ObjectId(userId) }, { items }, { new: true, upsert: true })
                .populate("items.productId")
                .populate("items.parentId");
        });
    }
    static clearCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyCart_1.default.findOneAndUpdate({ userId: new mongoose_1.Types.ObjectId(userId) }, { items: [] }, { new: true });
        });
    }
}
exports.CartRepository = CartRepository;
