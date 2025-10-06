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
exports.sendMailJob = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMailJob = (_a) => __awaiter(void 0, [_a], void 0, function* ({ to, subject, html }) {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Must be set in your env or serverless.yml
            pass: process.env.EMAIL_PASS, // App password, not Gmail account password
        },
    });
    yield transporter.sendMail({
        from: `"MyVastuAstro" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
    });
});
exports.sendMailJob = sendMailJob;
