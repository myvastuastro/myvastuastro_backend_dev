"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const partnerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dob: { type: Date, required: true },
    birthTime: { type: String, required: true },
    birthPlace: { type: String, required: true }
});
const matchMakingSchema = new mongoose_1.default.Schema({
    boy: { type: partnerSchema, required: true },
    girl: { type: partnerSchema, required: true },
    compatibilityScore: { type: Number, default: null }
}, { timestamps: true });
const matchMaking = mongoose_1.default.model('matchMaking', matchMakingSchema);
exports.default = matchMaking;
