"use strict";
// services/contactService.ts
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
exports.NotificationService = void 0;
const notificationRepository_1 = require("../repo/notificationRepository");
const sendNotification_1 = require("../utils/sendNotification");
class NotificationService {
    static createNotification(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield notificationRepository_1.NotificationRepository.saveNotification(data);
                const tokens = Array.isArray(data.deviceToken) ? data.deviceToken : [data.deviceToken];
                for (const deviceToken of tokens) {
                    yield (0, sendNotification_1.sendNotification)(deviceToken, data.title, data.body);
                }
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
                return yield notificationRepository_1.NotificationRepository.getNotificationById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateNotification(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield notificationRepository_1.NotificationRepository.updateNotification(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteNotification(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield notificationRepository_1.NotificationRepository.deleteNotification(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield notificationRepository_1.NotificationRepository.getAllNotification();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.NotificationService = NotificationService;
