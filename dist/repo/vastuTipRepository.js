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
exports.vastuTipRepository = void 0;
const vastuTip_1 = __importDefault(require("../models/vastuTip"));
class vastuTipRepository {
    static createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description } = data, rest = __rest(data, ["title", "description"]);
                const existingProduct = yield vastuTip_1.default.findOne({ title, description });
                if (existingProduct) {
                    return yield vastuTip_1.default.findOneAndUpdate({ title, description }, { $set: rest }, { new: true });
                }
                else {
                    const product = new vastuTip_1.default(data);
                    return yield product.save();
                }
            }
            catch (error) {
                console.error('Error creating user:', error);
                throw error;
            }
        });
    }
    static getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuTip_1.default.find({});
        });
    }
    static updateProducts(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuTip_1.default.findByIdAndUpdate(id, { $set: data }, { new: true });
        });
    }
    static getVastuTipsControllerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuTip_1.default.findById(id);
        });
    }
    static deleteVastuTipsController(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuTip_1.default.deleteOne({ _id: id });
        });
    }
}
exports.vastuTipRepository = vastuTipRepository;
