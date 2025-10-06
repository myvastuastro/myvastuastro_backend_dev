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
exports.TalkToAdvisorService = void 0;
const talkToAdvisorRepository_1 = require("../repo/talkToAdvisorRepository");
class TalkToAdvisorService {
    static createTalkToAdvisor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield talkToAdvisorRepository_1.TalkToAdvisorRepository.createAdvisor(data);
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
                return yield talkToAdvisorRepository_1.TalkToAdvisorRepository.getAdvisorById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateAdvisor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAdvisorRepository_1.TalkToAdvisorRepository.updateAdvisor(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteTalkToAdvisor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAdvisorRepository_1.TalkToAdvisorRepository.deleteTalkToAdvisor(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAdvisorRepository_1.TalkToAdvisorRepository.getAllAdvisors();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.TalkToAdvisorService = TalkToAdvisorService;
