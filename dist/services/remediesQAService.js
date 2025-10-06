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
exports.RemediesQAService = void 0;
const remediesQARepository_1 = require("../repo/remediesQARepository");
class RemediesQAService {
    static createRemediesQA(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield remediesQARepository_1.RemediesQARepository.createRemediesQA(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQARepository_1.RemediesQARepository.getRemediesQAById(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQARepository_1.RemediesQARepository.getRemediesQAByUserId(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateRemediesQA(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQARepository_1.RemediesQARepository.updateRemediesQA(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteRemediesQA(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQARepository_1.RemediesQARepository.deleteRemediesQA(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield remediesQARepository_1.RemediesQARepository.getAllRemediesQAs();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.RemediesQAService = RemediesQAService;
