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
exports.AppointmentService = void 0;
const appointmentRepository_1 = require("../repo/appointmentRepository");
class AppointmentService {
    static createAppointment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield appointmentRepository_1.AppointmentRepository.createAppointment(data);
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
                return yield appointmentRepository_1.AppointmentRepository.getAppointmentById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateAppointment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield appointmentRepository_1.AppointmentRepository.updateAppointment(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteAppointment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield appointmentRepository_1.AppointmentRepository.deleteAppointment(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield appointmentRepository_1.AppointmentRepository.getAllAppointments();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.AppointmentService = AppointmentService;
