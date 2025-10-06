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
exports.LuckyNumberColorService = void 0;
const luckyNumberColorRepository_1 = require("../repo/luckyNumberColorRepository");
const zodiacUtils_1 = require("../utils/zodiacUtils");
class LuckyNumberColorService {
    static createLuckyNumberColor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sign = (0, zodiacUtils_1.getZodiacSign)(data.dob);
                const lucky = (0, zodiacUtils_1.getLuckyDetails)(sign);
                if (!lucky) {
                    throw new Error('Could not determine lucky details');
                }
                const create = yield luckyNumberColorRepository_1.LuckyNumberColorRepository.createLuckyNumberColor({
                    name: data.name,
                    dob: data.dob,
                    sign: lucky.sign,
                    luckyNumber: lucky.luckyNumber,
                    luckyColor: lucky.luckyColor,
                });
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
                return yield luckyNumberColorRepository_1.LuckyNumberColorRepository.getLuckyNumberColorById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateLuckyNumberColor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield luckyNumberColorRepository_1.LuckyNumberColorRepository.updateLuckyNumberColor(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteLuckyNumberColor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield luckyNumberColorRepository_1.LuckyNumberColorRepository.deleteLuckyNumberColor(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield luckyNumberColorRepository_1.LuckyNumberColorRepository.getAllLuckyNumberColors();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
    static searchLuckyNumberColor(name, dob) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {};
            if (name) {
                query.name = new RegExp(name, "i");
            }
            if (dob) {
                query.dob = dob; // exact match
            }
            return yield luckyNumberColorRepository_1.LuckyNumberColorRepository.findByQuery(query);
        });
    }
}
exports.LuckyNumberColorService = LuckyNumberColorService;
