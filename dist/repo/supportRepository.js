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
exports.SupportRepository = void 0;
// repositories/contactRepository.ts
const support_1 = __importDefault(require("../models/support"));
class SupportRepository {
    static createSupport(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, name, email, mobile, message, support, } = data;
                const parsedAvailability = typeof support === 'string'
                    ? JSON.parse(support)
                    : support;
                const newSupport = yield support_1.default.create({
                    userId,
                    name,
                    email,
                    mobile,
                    message,
                    support: parsedAvailability,
                });
                return newSupport;
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getSupportById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield support_1.default.findById(id);
        });
    }
    static updateSupport(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Parse availability if it's a string (e.g., from form-data)
                if (data.support && typeof data.support === 'string') {
                    data.support = JSON.parse(data.support);
                }
                return yield support_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu Support:', error);
                throw error;
            }
        });
    }
    static deleteSupport(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield support_1.default.deleteOne({ _id: id });
        });
    }
    static getAllSupports() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield support_1.default.find();
        });
    }
}
exports.SupportRepository = SupportRepository;
