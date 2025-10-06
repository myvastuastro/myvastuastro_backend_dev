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
exports.registerSocket = registerSocket;
const messageService_1 = require("../services/chatServices/messageService");
function registerSocket(io) {
    io.on("connection", (socket) => {
        console.log("Socket connected:", socket.id);
        socket.on("identify", ({ userId, role }) => {
            socket.userId = userId;
            socket.role = role;
            socket.join(userId);
            console.log(`${role} connected: ${userId}`);
        });
        // When astrologer responds
        socket.on("chat_response", (data) => {
            const { chatId, userId, status, message } = data;
            // Send only to the correct user
            io.to(userId).emit("chat_response", {
                chatId,
                status,
                message,
            });
            // (Optional) also send to chat room
            io.to(chatId).emit("chat_response", {
                chatId,
                status,
                message,
            });
        });
        socket.on("join_chat", ({ chatId }) => {
            socket.join(chatId);
        });
        // --- 3. Send message ---
        socket.on("send_message", (msg) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!msg.chatId) {
                    console.log("send_message missing chatId:", msg);
                    return;
                }
                // Save message to DB
                const savedMsg = yield messageService_1.MessageService.sendMessage(msg);
                // Emit message to all users in the chat room
                io.to(msg.chatId).emit("new_message", savedMsg);
                console.log("Message sent to room:", msg.chatId);
            }
            catch (err) {
                console.error("Error sending message:", err);
            }
        }));
        // --- 5. Handle chat exit (User/Astrologer) ---
        socket.on("chat_exit", ({ chatId, userId, role }) => {
            console.log(`❌ Chat exited by ${role}: ${userId}`);
            // Notify other party in the chat
            io.to(chatId).emit("chat_exit", {
                chatId,
                exitedBy: role,
                userId,
                message: `${role === "user" ? "User" : "Astrologer"} has left the chat.`,
            });
        });
        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
        });
    });
}
