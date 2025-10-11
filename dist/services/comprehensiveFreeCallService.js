"use strict";
// services/contactService.ts
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
exports.ComprehensiveFreeCallService = void 0;
const comprehensiveFreeCallRepository_1 = require("../repo/comprehensiveFreeCallRepository");
class ComprehensiveFreeCallService {
    static createComprehensive(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield comprehensiveFreeCallRepository_1.ComprehensiveFreeCallRepository.createComprehensive(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveFreeCallRepository_1.ComprehensiveFreeCallRepository.getComprehensiveById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateComprehensive(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveFreeCallRepository_1.ComprehensiveFreeCallRepository.updateComprehensive(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteComprehensive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveFreeCallRepository_1.ComprehensiveFreeCallRepository.deleteComprehensive(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveFreeCallRepository_1.ComprehensiveFreeCallRepository.getAllComprehensives();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.ComprehensiveFreeCallService = ComprehensiveFreeCallService;
