"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZodiacSign = getZodiacSign;
exports.getLuckyDetails = getLuckyDetails;
const zodiacData_1 = __importDefault(require("../config/zodiacData"));
function getZodiacSign(dob) {
    const [year, month, day] = dob.split("-").map(Number);
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagittarius";
    return "Capricorn"; // Dec 22 – Jan 19
}
function getLuckyDetails(sign) {
    const zodiac = zodiacData_1.default[sign];
    if (!zodiac)
        return null;
    const luckyNumber = zodiac.luckyNumbers[Math.floor(Math.random() * zodiac.luckyNumbers.length)];
    const luckyColor = zodiac.luckyColors[Math.floor(Math.random() * zodiac.luckyColors.length)];
    return { sign, luckyNumber, luckyColor };
}
