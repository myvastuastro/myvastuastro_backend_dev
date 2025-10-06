import mongoose, { Schema, model, Document, Types } from "mongoose";

export interface IAstrologyProduct extends Document {
    parentId: string;
    name: string;
    category: string;             
    description?: string;
    file: string[];
    price: number;
    discountPrice?: number;
    stock: number;
    sku?: string;
    astrologerId?: Types.ObjectId;      
    deliveryTime?: string;        
    isActive: boolean;
    tags?: string[];
    rating?: number;
    reviews?: {
        userId: string;
        comment: string;
        rating: number;
        date: Date;
    }[];
}

const astrologySchema = new Schema<IAstrologyProduct>(
    {
        parentId: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
        description: String,
        file: [String],
        price: { type: Number, required: true },
        discountPrice: Number,
        stock: { type: Number, default: 0 },
        sku: { type: String, unique: true, sparse: true },
        astrologerId: {
            type: Schema.Types.ObjectId,
            ref: "astrogler",
            required: false
        },
        deliveryTime: String,
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
    },
    { timestamps: true }
);

export default model<IAstrologyProduct>("astrologyProduct", astrologySchema);
