import { Server, Socket } from "socket.io";
import { MessageService } from "../services/chatServices/messageService";

interface CustomSocket extends Socket {
  userId?: string;
  role?: "user" | "astrologer";
}

export function registerSocket(io: Server) {
  io.on("connection", (socket: CustomSocket) => {
    console.log("Socket connected:", socket.id);

    socket.on("identify", ({ userId, role }: { userId: string; role: "user" | "astrologer" }) => {
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
    socket.on("send_message", async (msg: { chatId: string; fromId: string; fromRole: string; text: string }) => {
      try {
        if (!msg.chatId) {
          console.log("send_message missing chatId:", msg);
          return;
        }

        // Save message to DB
        const savedMsg = await MessageService.sendMessage(msg);

        // Emit message to all users in the chat room
        io.to(msg.chatId).emit("new_message", savedMsg);
        console.log("Message sent to room:", msg.chatId);
      } catch (err) {
        console.error("Error sending message:", err);
      }
    });

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
