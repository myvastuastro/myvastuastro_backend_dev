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
exports.HoroscopeService = void 0;
const horoscopeRepo_1 = require("../repo/horoscopeRepo");
class HoroscopeService {
    static createHoroscope(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield horoscopeRepo_1.HoroscopeRepository.createHoroscope(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static uploadHoroscopes(horoscopes) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield horoscopeRepo_1.HoroscopeRepository.bulkUpsert(horoscopes);
        });
    }
    static getHoroscopesByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return horoscopeRepo_1.HoroscopeRepository.findByDate(date);
        });
    }
    static getByIdHoroscope(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield horoscopeRepo_1.HoroscopeRepository.findById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateHoroscope(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield horoscopeRepo_1.HoroscopeRepository.updateById(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteHoroscope(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield horoscopeRepo_1.HoroscopeRepository.deleteById(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAllHoroscope() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield horoscopeRepo_1.HoroscopeRepository.findAll();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.HoroscopeService = HoroscopeService;
