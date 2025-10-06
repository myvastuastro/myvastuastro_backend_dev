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
exports.MyVastuAstroService = void 0;
const myVastuAstroRepository_1 = require("../repo/myVastuAstroRepository");
class MyVastuAstroService {
    static createMyVastuAstro(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield myVastuAstroRepository_1.MyVastuAstroRepository.createMyVastuAstro(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield myVastuAstroRepository_1.MyVastuAstroRepository.getMyVastuAstroById(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateMyVastuAstro(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield myVastuAstroRepository_1.MyVastuAstroRepository.updateMyVastuAstro(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteMyVastuAstro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield myVastuAstroRepository_1.MyVastuAstroRepository.deleteMyVastuAstro(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield myVastuAstroRepository_1.MyVastuAstroRepository.getAllMyVastuAstros();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.MyVastuAstroService = MyVastuAstroService;
