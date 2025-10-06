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
exports.TalkToAstrologerRepository = void 0;
const talktoAstrologer_1 = __importDefault(require("../models/talktoAstrologer"));
class TalkToAstrologerRepository {
    static createTalkToAstrologer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.create(data);
        });
    }
    static getTalkToAstrologerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.find({ _id: id });
        });
    }
    static updateTalkToAstrologer(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
        });
    }
    static deleteTalkToAstrologer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.deleteOne({ _id: id });
        });
    }
    static getAllTalkToAstrologer() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.find();
        });
    }
    static toggleService(astrologerId, serviceKey, isEnabled) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.findByIdAndUpdate(astrologerId, { $set: { [`services.${serviceKey}`]: isEnabled } }, { new: true });
        });
    }
    static setOnlineStatus(astrologerId, isOnline) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.findByIdAndUpdate(astrologerId, { isOnline }, { new: true });
        });
    }
    static updateSchedule(astrologerId, schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talktoAstrologer_1.default.findByIdAndUpdate(astrologerId, { $set: Object.assign({}, schedule) }, // ✅ use $set
            { new: true });
        });
    }
    static findById(astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return talktoAstrologer_1.default.findById(astrologerId);
        });
    }
    static save(astrologer) {
        return __awaiter(this, void 0, void 0, function* () {
            return astrologer.save();
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return talktoAstrologer_1.default.find().select("name rating reviewsCount");
        });
    }
}
exports.TalkToAstrologerRepository = TalkToAstrologerRepository;
