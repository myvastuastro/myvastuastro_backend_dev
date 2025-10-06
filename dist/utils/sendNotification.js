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
exports.sendNotification = void 0;
const firebase_1 = __importDefault(require("../firebase/firebase"));
const sendNotification = (deviceToken, title, body) => __awaiter(void 0, void 0, void 0, function* () {
    const message = {
        token: deviceToken,
        notification: {
            title,
            body,
        },
        android: {
            priority: 'high',
            notification: {
                channelId: 'default',
            },
        },
        apns: {
            payload: {
                aps: {
                    alert: {
                        title,
                        body,
                    },
                    sound: 'default',
                },
            },
        },
    };
    try {
        const response = yield firebase_1.default.messaging().send(message);
        console.log('✅ Notification sent:', response);
        return response;
    }
    catch (error) {
        console.error('❌ Error sending notification:', error);
        throw error;
    }
});
exports.sendNotification = sendNotification;
