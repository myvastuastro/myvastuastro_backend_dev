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
exports.ParentRepository = void 0;
const AstrologyParent_1 = __importDefault(require("../../models/store/AstrologyParent"));
class ParentRepository {
    static createParent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield AstrologyParent_1.default.create(data);
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getParentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyParent_1.default.find({ _id: id });
        });
    }
    static getParentByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyParent_1.default.find({ userId: userId });
        });
    }
    static updateParent(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield AstrologyParent_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu Parent:', error);
                throw error;
            }
        });
    }
    static deleteParent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyParent_1.default.deleteOne({ _id: id });
        });
    }
    static getAllParent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AstrologyParent_1.default.find();
        });
    }
}
exports.ParentRepository = ParentRepository;
