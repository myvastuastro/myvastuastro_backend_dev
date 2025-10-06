"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const astrologySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: String,
    file: [String],
    isActive: { type: Boolean, default: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("astrologyParent", astrologySchema);
