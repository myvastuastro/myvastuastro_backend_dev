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
exports.ParentService = void 0;
const parentRepo_1 = require("../../repo/repositories/parentRepo");
class ParentService {
    static createParent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, isActive, file } = data;
                let imageUrl;
                if (file) {
                    imageUrl = file.path;
                }
                const parentRepo = yield parentRepo_1.ParentRepository.createParent({
                    name,
                    description,
                    isActive,
                    file: imageUrl,
                });
                return parentRepo;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getParentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield parentRepo_1.ParentRepository.getParentById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static getParentByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield parentRepo_1.ParentRepository.getParentByUserId(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateParent(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield parentRepo_1.ParentRepository.updateParent(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteParent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield parentRepo_1.ParentRepository.deleteParent(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getParentAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield parentRepo_1.ParentRepository.getAllParent();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.ParentService = ParentService;
