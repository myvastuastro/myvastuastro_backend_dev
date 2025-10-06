"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartItemSchema = new mongoose_1.Schema({
    parentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "AstrologyParent", required: true },
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: "AstrologyProduct", required: true },
    quantity: { type: Number, default: 1, min: 1 },
}, { _id: false });
const cartSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: [cartItemSchema],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("astrologyCart", cartSchema);
