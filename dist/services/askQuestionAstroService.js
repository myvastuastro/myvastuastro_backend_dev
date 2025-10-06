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
exports.AskQuestionAstroService = void 0;
const askQuestionAstroRepository_1 = require("../repo/askQuestionAstroRepository");
class AskQuestionAstroService {
    static createAskQuestionAstro(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, name, email, mobile, dob, birthTime, birthPlace, question, astrologerId, file } = data;
                let imageUrl;
                if (file) {
                    imageUrl = file.path;
                }
                console.log("data in service", imageUrl);
                const askQuestionAstro = yield askQuestionAstroRepository_1.AskQuestionAstroRepository.createAskQuestionAstro({
                    userId,
                    name,
                    email,
                    mobile,
                    dob,
                    birthTime,
                    birthPlace,
                    question,
                    astrologerId,
                    image: imageUrl,
                });
                return askQuestionAstro;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getAskQuestionAstroById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionAstroRepository_1.AskQuestionAstroRepository.getAskQuestionAstroById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static getAskQuestionAstroByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionAstroRepository_1.AskQuestionAstroRepository.getAskQuestionAstroByUserId(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateAskQuestionAstro(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionAstroRepository_1.AskQuestionAstroRepository.updateAskQuestionAstro(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteAskQuestionAstro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionAstroRepository_1.AskQuestionAstroRepository.deleteAskQuestionAstro(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAskQuestionAstroAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionAstroRepository_1.AskQuestionAstroRepository.getAllAskQuestionAstro();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
    static answerQuestionAstro(id, answer, astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionAstroRepository_1.AskQuestionAstroRepository.answerQuestionAstro(id, answer, astrologerId);
            }
            catch (error) {
                throw new Error("Could not answer question");
            }
        });
    }
}
exports.AskQuestionAstroService = AskQuestionAstroService;
