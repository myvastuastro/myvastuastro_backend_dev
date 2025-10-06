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
exports.LuckyNumberColorRepository = void 0;
const luckyNumberColors_1 = __importDefault(require("../models/luckyNumberColors"));
class LuckyNumberColorRepository {
    static createLuckyNumberColor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("data", data);
                return yield luckyNumberColors_1.default.create(data);
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getLuckyNumberColorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield luckyNumberColors_1.default.findById(id);
        });
    }
    static updateLuckyNumberColor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield luckyNumberColors_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu LuckyNumberColor:', error);
                throw error;
            }
        });
    }
    static deleteLuckyNumberColor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield luckyNumberColors_1.default.deleteOne({ _id: id });
        });
    }
    static getAllLuckyNumberColors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield luckyNumberColors_1.default.find();
        });
    }
    static findByQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield luckyNumberColors_1.default.find(query);
        });
    }
}
exports.LuckyNumberColorRepository = LuckyNumberColorRepository;
