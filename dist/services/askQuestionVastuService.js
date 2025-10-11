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
exports.AskQuestionVastuService = void 0;
const askQuestionVastuRepository_1 = require("../repo/askQuestionVastuRepository");
class AskQuestionVastuService {
    static createAskQuestionVastu(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield askQuestionVastuRepository_1.AskQuestionRepository.createAskQuestionVastu(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getAskQuestionByUserIdVastu(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionVastuRepository_1.AskQuestionRepository.getAskQuestionByUserIdVastu(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateAskQuestionVastu(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionVastuRepository_1.AskQuestionRepository.updateAskQuestionVastu(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteAskQuestionVastu(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionVastuRepository_1.AskQuestionRepository.deleteAskQuestionVastu(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAllAskQuestionsVastu() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionVastuRepository_1.AskQuestionRepository.getAllAskQuestionsVastu();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
    static answerQuestionVastu(id, answer, vastuAstrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield askQuestionVastuRepository_1.AskQuestionRepository.answerQuestionVastu(id, answer, vastuAstrologerId);
            }
            catch (error) {
                throw new Error("Could not answer question");
            }
        });
    }
}
exports.AskQuestionVastuService = AskQuestionVastuService;
