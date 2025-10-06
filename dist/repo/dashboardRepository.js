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
exports.DashboardRepository = void 0;
// repositories/dashboardRepository.ts
const user_1 = __importDefault(require("../models/user"));
const PaymentModel_1 = __importDefault(require("../models/PaymentModel"));
const vastuAstrologer_1 = __importDefault(require("../models/vastuAstrologer"));
const vastuTip_1 = __importDefault(require("../models/vastuTip"));
const askQuestion_1 = __importDefault(require("../models/askQuestion"));
const notificationModel_1 = __importDefault(require("../models/notificationModel")); // Assuming you have a Notification model
class DashboardRepository {
    static getAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all([
                user_1.default.find({}),
                PaymentModel_1.default.find({}),
                vastuAstrologer_1.default.find({}),
                vastuTip_1.default.find({}),
                askQuestion_1.default.find({}),
                notificationModel_1.default.find({}) // Fetch notifications
                // Add any other models you want to fetch data from 
            ]);
        });
    }
}
exports.DashboardRepository = DashboardRepository;
