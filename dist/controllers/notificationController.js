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
exports.createNotification = createNotification;
exports.getNotification = getNotification;
exports.updateNotification = updateNotification;
exports.deleteNotification = deleteNotification;
exports.getAllNotifications = getAllNotifications;
const notificationService_1 = require("../services/notificationService");
function createNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notification = yield notificationService_1.NotificationService.createNotification(req.body);
            if (notification) {
                res.status(200).json({ message: 'Submit successful', data: notification, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: notification });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const notification = yield notificationService_1.NotificationService.getById(id);
            if (Notification) {
                res.status(200).json({ message: 'Find successful', data: Notification, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: Notification });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const Notification = yield notificationService_1.NotificationService.updateNotification(id, req.body);
            if (Notification) {
                res.status(200).json({ message: 'Update successful', data: Notification, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: Notification });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const Notification = yield notificationService_1.NotificationService.deleteNotification(id);
            if (Notification) {
                res.status(200).json({ message: 'Delete successful', data: Notification, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: Notification });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllNotifications(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notification = yield notificationService_1.NotificationService.getAll();
            if (notification) {
                res.status(200).json({ message: 'Find successful', data: notification, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: notification });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Notification not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
