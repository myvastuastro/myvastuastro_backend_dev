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
exports.ComprehensiveService = void 0;
const comprehensiveRepository_1 = require("../repo/comprehensiveRepository");
class ComprehensiveService {
    static createComprehensive(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield comprehensiveRepository_1.ComprehensiveRepository.createComprehensive(data);
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
                return yield comprehensiveRepository_1.ComprehensiveRepository.getComprehensiveById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateComprehensive(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveRepository_1.ComprehensiveRepository.updateComprehensive(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteComprehensive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveRepository_1.ComprehensiveRepository.deleteComprehensive(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield comprehensiveRepository_1.ComprehensiveRepository.getAllComprehensives();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.ComprehensiveService = ComprehensiveService;
