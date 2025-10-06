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
exports.NotificationService = void 0;
const userToken_1 = __importDefault(require("../models/userToken"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
class NotificationService {
    static sendToAstrologer(astrologerId, chatId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("AstrologerId:", astrologerId);
            // Find astrologer by ID
            const astrologer = yield userToken_1.default.findOne({ astrologerId: astrologerId });
            console.log("Astrologer:", astrologer);
            if (!(astrologer === null || astrologer === void 0 ? void 0 : astrologer.deviceToken))
                return;
            // FCM message payload
            const message = {
                token: astrologer.deviceToken,
                notification: {
                    title: "New Chat Request",
                    body: "A user wants to chat with you",
                },
                data: {
                    type: "incoming_chat",
                    chatId: chatId.toString(),
                    userId: String(userId),
                    astrologerId: String(astrologerId), // optional but useful
                },
                android: {
                    priority: "high",
                    notification: {
                        sound: "hello", // Android plays default sound
                    },
                },
                apns: {
                    headers: {
                        "apns-priority": "10",
                    },
                    payload: {
                        aps: {
                            alert: {
                                title: "New Chat Request",
                                body: "A user wants to chat with you",
                            },
                            sound: "hello.mp3", // iOS plays default sound
                            contentAvailable: true, // ensures background delivery
                        },
                    },
                },
            };
            try {
                yield firebase_admin_1.default.messaging().send(message);
                console.log("✅ Notification sent to astrologer:", astrologerId, "for chat:", chatId);
            }
            catch (error) {
                console.error("FCM send error:", error);
            }
        });
    }
}
exports.NotificationService = NotificationService;
