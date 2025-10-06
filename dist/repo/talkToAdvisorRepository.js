"use strict";
// repositories/contactRepository.ts
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
exports.TalkToAdvisorRepository = void 0;
const talkToAdvisor_1 = __importDefault(require("../models/talkToAdvisor"));
class TalkToAdvisorRepository {
    static createAdvisor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, name, email, mobile, message, appointment, } = data;
                const parsedAvailability = typeof appointment === 'string'
                    ? JSON.parse(appointment)
                    : appointment;
                const newAppointment = yield talkToAdvisor_1.default.create({
                    userId,
                    name,
                    email,
                    mobile,
                    message,
                    appointment: parsedAvailability,
                });
                return newAppointment;
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getAdvisorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talkToAdvisor_1.default.findById(id);
        });
    }
    static updateAdvisor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAdvisor_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu Advisor:', error);
                throw error;
            }
        });
    }
    static deleteTalkToAdvisor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talkToAdvisor_1.default.deleteOne({ _id: id });
        });
    }
    static getAllAdvisors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield talkToAdvisor_1.default.find();
        });
    }
}
exports.TalkToAdvisorRepository = TalkToAdvisorRepository;
