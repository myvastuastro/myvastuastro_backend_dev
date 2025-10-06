// repositories/dashboardRepository.ts
import User from "../models/user";
import Payment from "../models/PaymentModel";
import vastuAstrogler from "../models/vastuAstrologer";
import VastuTip from "../models/vastuTip";
import Question from "../models/askQuestion";
import Notification from "../models/notificationModel"; // Assuming you have a Notification model

export class DashboardRepository {
    static async getAllData(): Promise<any | null> {
        return Promise.all([
            User.find({}),
            Payment.find({}),
            vastuAstrogler.find({}),
            VastuTip.find({}),
            Question.find({}),
            Notification.find({}) // Fetch notifications
            // Add any other models you want to fetch data from 
        ]);
    }
}
