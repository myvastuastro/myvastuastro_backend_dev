"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const comprehensiveSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    professionalId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "vastuProfessional",
        required: false
    },
    vastuAstrologerId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    comprehensive: [
        {
            date: {
                type: Date,
                required: true
            },
            times: [
                {
                    type: String
                }
            ]
        }
    ]
}, {
    timestamps: true
});
const comprehensive = mongoose_1.default.model('vastuComprehensive', comprehensiveSchema);
exports.default = comprehensive;
