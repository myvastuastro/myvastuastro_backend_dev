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
exports.MatchService = void 0;
const matchRepository_1 = require("../repo/matchRepository");
const kundliGenerator_1 = require("../utils/kundliGenerator");
function calculateCompatibility(boyChart, girlChart) {
    let score = 0;
    // ✅ Example rules (simplified Gun Milan)
    if (boyChart.moonSign === girlChart.moonSign)
        score += 5;
    if (boyChart.ascendant === girlChart.ascendant)
        score += 5;
    if (boyChart.zodiacSign === girlChart.zodiacSign)
        score += 5;
    if (boyChart.planets.Venus.sign === girlChart.planets.Mars.sign)
        score += 3;
    if (boyChart.planets.Mars.sign === girlChart.planets.Venus.sign)
        score += 3;
    return score;
}
class MatchService {
    static createMatch(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                const { boy, girl } = data;
                // ✅ Generate Kundlis
                const boyChart = (0, kundliGenerator_1.generateKundli)(new Date(`${boy.dob}T${boy.birthTime}`), (_a = boy.latitude) !== null && _a !== void 0 ? _a : 28.61, (_b = boy.longitude) !== null && _b !== void 0 ? _b : 77.23, "+05:30");
                const girlChart = (0, kundliGenerator_1.generateKundli)(new Date(`${girl.dob}T${girl.birthTime}`), (_c = girl.latitude) !== null && _c !== void 0 ? _c : 19.07, (_d = girl.longitude) !== null && _d !== void 0 ? _d : 72.87, "+05:30");
                // ✅ Compatibility Score
                const compatibilityScore = calculateCompatibility(boyChart, girlChart);
                // ✅ Save in DB
                const create = yield matchRepository_1.MatchRepository.createMatch({
                    boy,
                    girl,
                    compatibilityScore,
                });
                return Object.assign(Object.assign({}, create.toObject()), { boyChart,
                    girlChart,
                    compatibilityScore });
            }
            catch (error) {
                throw new Error("Could not create match");
            }
        });
    }
    static getByIdMatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield matchRepository_1.MatchRepository.findById(id);
            }
            catch (error) {
                throw new Error('Could not get match');
            }
        });
    }
    static updateMatch(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield matchRepository_1.MatchRepository.updateById(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteMatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield matchRepository_1.MatchRepository.deleteById(id);
            }
            catch (error) {
                throw new Error('Could not delete match');
            }
        });
    }
    static getAllMatch() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield matchRepository_1.MatchRepository.findAll();
            }
            catch (error) {
                throw new Error('Could not get match');
            }
        });
    }
}
exports.MatchService = MatchService;
