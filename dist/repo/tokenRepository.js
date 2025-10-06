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
exports.TokenRepository = void 0;
const userToken_1 = __importDefault(require("../models/userToken"));
class TokenRepository {
    static createToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, deviceToken, jwtToken, platform } = data;
            const updatedToken = yield userToken_1.default.findOneAndUpdate({ userId }, // Filter
            {
                $set: {
                    deviceToken,
                    jwtToken,
                    platform,
                    updatedAt: new Date(),
                },
            }, {
                new: true, // Return the updated document
                upsert: true, // Create if it doesn't exist
            });
            return updatedToken;
        });
    }
    static getTokenById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userToken_1.default.findOne({ id });
        });
    }
    static updateToken(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userToken_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu AskQuestion:', error);
                throw error;
            }
        });
    }
    static deleteToken(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userToken_1.default.deleteOne({ _id: id });
        });
    }
    static getAllTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userToken_1.default.find();
        });
    }
}
exports.TokenRepository = TokenRepository;
