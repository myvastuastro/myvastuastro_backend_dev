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
exports.ProfessionalService = void 0;
const professionalRepository_1 = require("../repo/professionalRepository");
class ProfessionalService {
    static uploadProfessional(product, floorlink) {
        return __awaiter(this, void 0, void 0, function* () {
            return professionalRepository_1.ProfessionalRepository.createProfessional(product, floorlink);
        });
    }
    static listProfessionals() {
        return __awaiter(this, void 0, void 0, function* () {
            return professionalRepository_1.ProfessionalRepository.getAllProfessionals();
        });
    }
    static updateProfessionals(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return professionalRepository_1.ProfessionalRepository.updateProfessionals(id, data);
        });
    }
    static getProfessionalsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return professionalRepository_1.ProfessionalRepository.getProfessionalsByUserId(userId);
        });
    }
    static getProfessionalsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return professionalRepository_1.ProfessionalRepository.getProfessionalsById(id);
        });
    }
    static deleteProfessionalsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield professionalRepository_1.ProfessionalRepository.deleteProfessionalsById(id);
            }
            catch (error) {
                throw new Error('Could not delete professional');
            }
        });
    }
}
exports.ProfessionalService = ProfessionalService;
