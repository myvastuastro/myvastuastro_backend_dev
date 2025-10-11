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
exports.ComprehensiveRepository = void 0;
const comprehensiveModel_1 = __importDefault(require("../models/comprehensiveModel"));
class ComprehensiveRepository {
    static createComprehensive(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, vastuAstrologerId, comprehensive, professionalId } = data;
                const parsedAvailability = typeof comprehensive === 'string'
                    ? JSON.parse(comprehensive)
                    : comprehensive;
                const newComprehensive = yield comprehensiveModel_1.default.create({
                    userId,
                    vastuAstrologerId,
                    comprehensive: parsedAvailability,
                    professionalId
                });
                return newComprehensive;
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getComprehensiveById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comprehensiveModel_1.default.findById(id);
        });
    }
    static updateComprehensive(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Parse availability if it's a string (e.g., from form-data)
                if (data.comprehensive && typeof data.comprehensive === 'string') {
                    data.comprehensive = JSON.parse(data.comprehensive);
                }
                return yield comprehensiveModel_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu Comprehensive:', error);
                throw error;
            }
        });
    }
    static deleteComprehensive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comprehensiveModel_1.default.deleteOne({ _id: id });
        });
    }
    static getAllComprehensives() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comprehensiveModel_1.default.find().populate('userId')
                .populate('vastuAstrologerId').populate('professionalId');
        });
    }
}
exports.ComprehensiveRepository = ComprehensiveRepository;
