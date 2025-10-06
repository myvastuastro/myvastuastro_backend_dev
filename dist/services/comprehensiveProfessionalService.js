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
exports.ComprehensiveProfessionalService = void 0;
const comprehensiveProfessionalRepository_1 = require("../repo/comprehensiveProfessionalRepository");
class ComprehensiveProfessionalService {
    static uploadComprehensiveProfessional(product, floorlink) {
        return __awaiter(this, void 0, void 0, function* () {
            return comprehensiveProfessionalRepository_1.ComprehensiveProfessionalRepository.createComprehensiveProfessional(product, floorlink);
        });
    }
    static listComprehensiveProfessionals() {
        return __awaiter(this, void 0, void 0, function* () {
            return comprehensiveProfessionalRepository_1.ComprehensiveProfessionalRepository.getAllComprehensiveProfessionals();
        });
    }
    static updateComprehensiveProfessionals(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return comprehensiveProfessionalRepository_1.ComprehensiveProfessionalRepository.updateComprehensiveProfessionals(id, data);
        });
    }
    static getComprehensiveProfessionalsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return comprehensiveProfessionalRepository_1.ComprehensiveProfessionalRepository.getComprehensiveProfessionalsByUserId(userId);
        });
    }
    static getComprehensiveProfessionalsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveProfessionalRepository_1.ComprehensiveProfessionalRepository.getComprehensiveProfessionalsById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
}
exports.ComprehensiveProfessionalService = ComprehensiveProfessionalService;
