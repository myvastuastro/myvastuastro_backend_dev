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
exports.MatchRepository = void 0;
const matchMaking_1 = __importDefault(require("../models/matchMaking"));
class MatchRepository {
    static createMatch(matchData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield matchMaking_1.default.create(matchData);
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield matchMaking_1.default.find();
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield matchMaking_1.default.findById(id);
        });
    }
    static updateById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield matchMaking_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield matchMaking_1.default.findByIdAndDelete(id);
        });
    }
}
exports.MatchRepository = MatchRepository;
exports.default = new MatchRepository();
