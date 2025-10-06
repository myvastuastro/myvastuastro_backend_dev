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
exports.ComprehensiveProfessionalRepository = void 0;
const ComrehensiveProfessional_1 = __importDefault(require("../models/ComrehensiveProfessional"));
class ComprehensiveProfessionalRepository {
    static createComprehensiveProfessional(data, floorlink) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof data.appointment === 'string') {
                    try {
                        data.appointment = JSON.parse(data.appointment);
                    }
                    catch (parseError) {
                        console.error('Invalid appointment JSON:', parseError);
                        throw new Error('Invalid format for appointment. It should be a valid JSON array.');
                    }
                }
                const updatedData = Object.assign(Object.assign({}, data), { floorlink });
                const professional = new ComrehensiveProfessional_1.default(updatedData);
                return yield professional.save();
            }
            catch (error) {
                console.error('Error creating user:', error);
                throw error;
            }
        });
    }
    static getAllComprehensiveProfessionals() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ComrehensiveProfessional_1.default.find({});
        });
    }
    static getComprehensiveProfessionalsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ComrehensiveProfessional_1.default.find(userId);
        });
    }
    static getComprehensiveProfessionalsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ComrehensiveProfessional_1.default.find({ _id: id });
        });
    }
    static updateComprehensiveProfessionals(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (data.appointment && typeof data.appointment === 'string') {
                    data.appointment = JSON.parse(data.appointment);
                }
                return yield ComrehensiveProfessional_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu ComprehensiveProfessional:', error);
                throw error;
            }
        });
    }
}
exports.ComprehensiveProfessionalRepository = ComprehensiveProfessionalRepository;
