"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adminSupportSchema = new mongoose_1.default.Schema({
    name: {
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
const support = mongoose_1.default.model('vastuAdminSupport', adminSupportSchema);
exports.default = support;
