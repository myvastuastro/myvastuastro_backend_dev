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
exports.RemediesQARepository = void 0;
const remediesQA_1 = __importDefault(require("../models/remediesQA"));
class RemediesQARepository {
    static createRemediesQA(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQA_1.default.create(data);
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getRemediesQAByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield remediesQA_1.default.find({ userId: userId });
        });
    }
    static getRemediesQAById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield remediesQA_1.default.find({ _id: id });
        });
    }
    static updateRemediesQA(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQA_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu RemediesQA:', error);
                throw error;
            }
        });
    }
    static deleteRemediesQA(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield remediesQA_1.default.deleteOne({ _id: id });
        });
    }
    static getAllRemediesQAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield remediesQA_1.default.find();
        });
    }
}
exports.RemediesQARepository = RemediesQARepository;
