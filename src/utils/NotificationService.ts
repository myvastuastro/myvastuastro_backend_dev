import User from "../models/userToken";
import admin from "firebase-admin";

export class NotificationService {
  static async sendToAstrologer(astrologerId: any, chatId: any, userId: any) {
    console.log("AstrologerId:", astrologerId);

    // Find astrologer by ID
    const astrologer = await User.findOne({ astrologerId: astrologerId });
    console.log("Astrologer:", astrologer);

    if (!astrologer?.deviceToken) return;

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
        priority: "high" as const,
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
      await admin.messaging().send(message);
      console.log("✅ Notification sent to astrologer:", astrologerId, "for chat:", chatId);
    } catch (error) {
      console.error("FCM send error:", error);
    }
  }
}
