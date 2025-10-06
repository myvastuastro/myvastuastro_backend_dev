// razorpayInstance.ts
import Razorpay from 'razorpay';
import dotenv from "dotenv";
dotenv.config();
export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,         // from Razorpay Dashboard
  key_secret: process.env.RAZORPAY_KEY_SECRET!, // from Razorpay Dashboard
});
