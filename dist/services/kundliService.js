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
exports.KundliService = void 0;
const kundliRepository_1 = require("../repo/kundliRepository");
const kundliGenerator_1 = require("../utils/kundliGenerator");
class KundliService {
    static createKundli(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, gender, day, month, year, hours, minutes, seconds, birthPlace, latitude, longitude, timezone } = data;
                // Construct Date
                const birthDate = new Date(year, month - 1, day, hours, minutes, seconds);
                // Generate Kundli Chart
                const chart = (0, kundliGenerator_1.generateKundli)(birthDate, latitude, longitude, timezone);
                // Save in DB
                const kundli = yield kundliRepository_1.KundliRepository.createKundli({
                    name,
                    gender,
                    birthDateTime: birthDate,
                    day, month, year, hours, minutes, seconds,
                    birthPlace,
                    latitude,
                    longitude,
                    timezone,
                    chart,
                });
                return kundli;
            }
            catch (error) {
                throw new Error('Could not create kundli');
            }
        });
    }
    static getByIdKundli(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield kundliRepository_1.KundliRepository.findById(id);
            }
            catch (error) {
                throw new Error('Could not get kundli');
            }
        });
    }
    static getAllKundli() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield kundliRepository_1.KundliRepository.findAll();
            }
            catch (error) {
                throw new Error('Could not get kundli');
            }
        });
    }
}
exports.KundliService = KundliService;
