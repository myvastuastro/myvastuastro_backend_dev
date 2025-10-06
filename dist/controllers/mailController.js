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
exports.sendMailController = void 0;
const mailService_js_1 = require("../services/mailService.js");
const sendMailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, subject, text, html } = req.body;
    try {
        const info = yield (0, mailService_js_1.sendMailService)({ to, subject, text, html });
        res.status(200).json({ message: 'Email sent!', info });
    }
    catch (err) {
        res.status(500).json({ error: 'Email failed to send', detail: err });
    }
});
exports.sendMailController = sendMailController;
