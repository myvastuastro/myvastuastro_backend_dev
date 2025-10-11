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
exports.AppointmentImportantCallRepository = void 0;
const appointmentImportantCallModel_1 = __importDefault(require("../models/appointmentImportantCallModel"));
class AppointmentImportantCallRepository {
    static createAppointment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, vastuAstrologerId, name, email, mobile, message, appointment, status, astrologerNotes } = data;
                const parsedAvailability = typeof appointment === 'string'
                    ? JSON.parse(appointment)
                    : appointment;
                const newAppointment = yield appointmentImportantCallModel_1.default.create({
                    userId,
                    vastuAstrologerId,
                    name,
                    email,
                    mobile,
                    message,
                    appointment: parsedAvailability,
                    status,
                    astrologerNotes
                });
                return newAppointment;
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getAppointmentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield appointmentImportantCallModel_1.default.findById(id);
        });
    }
    static updateAppointment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (data.appointment && typeof data.appointment === 'string') {
                    data.appointment = JSON.parse(data.appointment);
                }
                return yield appointmentImportantCallModel_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu Appointment:', error);
                throw error;
            }
        });
    }
    static deleteAppointment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield appointmentImportantCallModel_1.default.deleteOne({ _id: id });
        });
    }
    static getAllAppointments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield appointmentImportantCallModel_1.default.find();
        });
    }
}
exports.AppointmentImportantCallRepository = AppointmentImportantCallRepository;
