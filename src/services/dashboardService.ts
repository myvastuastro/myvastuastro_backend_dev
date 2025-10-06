
import { DashboardRepository } from "../repo/dashboardRepository";

export class DashboardService {
    static async fetchDashboardData(): Promise<any> {
       try{
        const [users, payments, vastuAstroglers, vastuTips, questions, notifications] =
        await DashboardRepository.getAllData();
        return {
            users,
            payments,
            vastuAstroglers,
            vastuTips,
            questions,
            notifications
        };
    }catch(error){
        throw new Error('Could not create quote');
    }
}
}
