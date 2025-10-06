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
exports.ProductService = void 0;
const productRepo_1 = require("../../repo/repositories/productRepo");
class ProductService {
    static createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { parentId, name, category, description, price, discountPrice, stock, sku, astrologerId, deliveryTime, isActive, tags, rating, reviews, file } = data;
                let imageUrl;
                if (file) {
                    imageUrl = file.path;
                }
                console.log("data in service", imageUrl);
                const productRepo = yield productRepo_1.ProductRepository.createProduct({
                    parentId,
                    name,
                    category,
                    description,
                    price,
                    discountPrice,
                    stock,
                    sku,
                    astrologerId,
                    deliveryTime,
                    isActive,
                    tags,
                    rating,
                    reviews,
                    file: imageUrl,
                });
                return productRepo;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepo_1.ProductRepository.getProductById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static getProductByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepo_1.ProductRepository.getProductByUserId(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepo_1.ProductRepository.updateProduct(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepo_1.ProductRepository.deleteProduct(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getProductAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepo_1.ProductRepository.getAllProduct();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.ProductService = ProductService;
