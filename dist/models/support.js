"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const supportSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    support: [
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
const support = mongoose_1.default.model('vastuSupport', supportSchema);
exports.default = support;
