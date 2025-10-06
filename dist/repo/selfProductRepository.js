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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selfProductRepository = void 0;
const selfProduct_1 = __importDefault(require("../models/selfProduct"));
class selfProductRepository {
    static createOrUpdateProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, productName } = data, rest = __rest(data, ["userId", "productName"]);
                // Check if product already exists
                const existingProduct = yield selfProduct_1.default.findOne({ userId, productName });
                if (existingProduct) {
                    // Update existing product with new data
                    return yield selfProduct_1.default.findOneAndUpdate({ userId, productName }, { $set: rest }, { new: true } // return updated document
                    );
                }
                else {
                    // Create new product
                    const product = new selfProduct_1.default(data);
                    return yield product.save();
                }
            }
            catch (error) {
                console.error("Error creating/updating product:", error);
                throw error;
            }
        });
    }
    // static async createProduct(data: Partial<any>): Promise<any> {
    //   try {
    //     const { userId, productName, ...rest } = data;
    //     const existingProduct = await Product.findOne({ userId, productName });
    //     if (existingProduct) {
    //       return await Product.findOneAndUpdate(
    //         { userId, productName },
    //         { $set: rest },
    //         { new: true }
    //       );
    //     } else {
    //       const product = new Product(data);
    //       return await product.save();
    //     }
    //   } catch (error) {
    //     console.error('Error creating user:', error);
    //     throw error;
    //   }
    // }
    static getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield selfProduct_1.default.find({});
        });
    }
    static getByUserIdProducts(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield selfProduct_1.default.find({ userId: userId });
        });
    }
    static getByIdProducts(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield selfProduct_1.default.find({ _id: id });
        });
    }
    static deleteSelfProductsControllerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield selfProduct_1.default.deleteOne({ _id: id });
        });
    }
    static updateProducts(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield selfProduct_1.default.findByIdAndUpdate(id, { $set: data }, { new: true });
        });
    }
}
exports.selfProductRepository = selfProductRepository;
