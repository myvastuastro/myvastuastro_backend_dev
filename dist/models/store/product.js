"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["astrology", "vastu"], required: true },
    category: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    stock: { type: Number, default: 0 },
    sku: { type: String, unique: true, sparse: true },
    weight: { type: Number },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
    },
    material: { type: String },
    color: { type: String },
    astrologerName: { type: String },
    deliveryTime: { type: String },
    isActive: { type: Boolean, default: true },
    tags: [{ type: String }],
    rating: { type: Number, default: 0 },
    reviews: [
        {
            userId: { type: String },
            comment: { type: String },
            rating: { type: Number, min: 1, max: 5 },
            date: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Product", productSchema);
