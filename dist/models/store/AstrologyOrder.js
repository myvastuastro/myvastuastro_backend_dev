"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            productId: { type: mongoose_1.Schema.Types.ObjectId, ref: "AstrologyProduct", required: true },
            parentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "AstrologyParent", required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    addressId: { type: mongoose_1.Schema.Types.ObjectId, ref: "AstrologyAddress", required: true },
    paymentMethod: { type: String, enum: ["COD", "ONLINE"], required: true },
    status: {
        type: String,
        enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
        default: "pending"
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("astrologyOrder", orderSchema);
