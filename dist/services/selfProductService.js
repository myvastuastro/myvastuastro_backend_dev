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
exports.SelfProductService = void 0;
const selfProductRepository_1 = require("../repo/selfProductRepository");
class SelfProductService {
    static uploadProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return selfProductRepository_1.selfProductRepository.createProduct(product);
        });
    }
    static listProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return selfProductRepository_1.selfProductRepository.getAllProducts();
        });
    }
    static getSelfProductsController(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return selfProductRepository_1.selfProductRepository.getByUserIdProducts(userId);
        });
    }
    static getSelfProductsControllerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return selfProductRepository_1.selfProductRepository.getByIdProducts(id);
        });
    }
    static deleteSelfProductsControllerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return selfProductRepository_1.selfProductRepository.deleteSelfProductsControllerById(id);
        });
    }
    static updateProducts(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return selfProductRepository_1.selfProductRepository.updateProducts(id, data);
        });
    }
}
exports.SelfProductService = SelfProductService;
