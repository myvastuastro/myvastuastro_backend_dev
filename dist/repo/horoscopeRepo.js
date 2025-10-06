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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoroscopeRepository = void 0;
const horoscope_1 = __importDefault(require("../models/horoscope"));
class HoroscopeRepository {
    static createHoroscope(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield horoscope_1.default.create(data);
        });
    }
    static bulkUpsert(horoscopes) {
        return __awaiter(this, void 0, void 0, function* () {
            const ops = horoscopes.map((h) => ({
                updateOne: {
                    filter: { sign: h.sign, date: h.date },
                    update: { $set: h },
                    upsert: true
                }
            }));
            return horoscope_1.default.bulkWrite(ops);
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return horoscope_1.default.find().sort({ date: -1 }).lean();
        });
    }
    static findByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return horoscope_1.default.find({ date }).sort({ sign: 1 }).lean();
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return horoscope_1.default.findById(id).lean();
        });
    }
    static updateById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return horoscope_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return horoscope_1.default.findByIdAndDelete(id);
        });
    }
}
exports.HoroscopeRepository = HoroscopeRepository;
