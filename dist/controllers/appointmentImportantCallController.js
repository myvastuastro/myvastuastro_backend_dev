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
exports.createAppointmentImportantCall = createAppointmentImportantCall;
exports.getAppointmentImportantCall = getAppointmentImportantCall;
exports.updateAppointmentImportantCall = updateAppointmentImportantCall;
exports.deleteAppointmentImportantCall = deleteAppointmentImportantCall;
exports.getAllAppointmentsImportantCall = getAllAppointmentsImportantCall;
const appointmentImportantCallService_1 = require("../services/appointmentImportantCallService");
function createAppointmentImportantCall(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointment = yield appointmentImportantCallService_1.AppointmentImportantCallService.createAppointment(req.body);
            if (appointment) {
                res.status(200).json({ message: 'Submit successful', data: appointment, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAppointmentImportantCall(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield appointmentImportantCallService_1.AppointmentImportantCallService.getById(id);
            if (appointment) {
                res.status(200).json({ message: 'Find successful', data: appointment, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateAppointmentImportantCall(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield appointmentImportantCallService_1.AppointmentImportantCallService.updateAppointment(id, req.body);
            if (appointment) {
                res.status(200).json({ message: 'Update successful', data: appointment, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteAppointmentImportantCall(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield appointmentImportantCallService_1.AppointmentImportantCallService.deleteAppointment(id);
            if (appointment) {
                res.status(200).json({ message: 'Delete successful', data: appointment, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllAppointmentsImportantCall(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointment = yield appointmentImportantCallService_1.AppointmentImportantCallService.getAll();
            if (appointment) {
                res.status(200).json({ message: 'Find successful', data: appointment, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
