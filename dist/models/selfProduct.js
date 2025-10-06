"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const selfProductSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
        required: false
    },
    productName: {
        type: String,
        required: false
    },
    fileUrl: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
const product = mongoose_1.default.model("vastuSelfProduct", selfProductSchema);
exports.default = product;
