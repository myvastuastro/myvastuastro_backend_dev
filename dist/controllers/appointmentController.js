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
exports.createAppointment = createAppointment;
exports.getAppointment = getAppointment;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;
exports.getAllAppointments = getAllAppointments;
const appointmentService_1 = require("../services/appointmentService");
function createAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointment = yield appointmentService_1.AppointmentService.createAppointment(req.body);
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
function getAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield appointmentService_1.AppointmentService.getById(id);
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
function updateAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield appointmentService_1.AppointmentService.updateAppointment(id, req.body);
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
function deleteAppointment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield appointmentService_1.AppointmentService.deleteAppointment(id);
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
function getAllAppointments(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointment = yield appointmentService_1.AppointmentService.getAll();
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
