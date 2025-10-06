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
exports.VastuAstrologerService = void 0;
const vastuAstrologerRepository_1 = require("../repo/vastuAstrologerRepository");
class VastuAstrologerService {
    static createVastuAstrologer(data, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield vastuAstrologerRepository_1.VastuAstrologerRepository.createAstrologer(data, image);
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
                return yield vastuAstrologerRepository_1.VastuAstrologerRepository.getAstrologerById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateAstrologer(id, data, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield vastuAstrologerRepository_1.VastuAstrologerRepository.updateAstrologer(id, data, image);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteVastuAstrologer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield vastuAstrologerRepository_1.VastuAstrologerRepository.deleteVastuAstrologer(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield vastuAstrologerRepository_1.VastuAstrologerRepository.getAllAstrologers();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.VastuAstrologerService = VastuAstrologerService;
