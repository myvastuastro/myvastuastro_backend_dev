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
exports.DashboardService = void 0;
const dashboardRepository_1 = require("../repo/dashboardRepository");
class DashboardService {
    static fetchDashboardData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [users, payments, vastuAstroglers, vastuTips, questions, notifications] = yield dashboardRepository_1.DashboardRepository.getAllData();
                return {
                    users,
                    payments,
                    vastuAstroglers,
                    vastuTips,
                    questions,
                    notifications
                };
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
}
exports.DashboardService = DashboardService;
