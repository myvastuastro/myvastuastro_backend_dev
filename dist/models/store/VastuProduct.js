"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const vastuSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: String,
    images: [String],
    price: { type: Number, required: true },
    discountPrice: Number,
    stock: { type: Number, default: 0 },
    sku: { type: String, unique: true, sparse: true },
    weight: Number,
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
    },
    material: String,
    color: String,
    isActive: { type: Boolean, default: true },
    tags: [String],
    rating: { type: Number, default: 0 },
    reviews: [
        {
            userId: String,
            comment: String,
            rating: { type: Number, min: 1, max: 5 },
            date: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("vastuProduct", vastuSchema);
