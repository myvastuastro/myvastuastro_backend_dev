import { Schema, model, Document } from "mongoose";

export interface IVastuProduct extends Document {
  name: string;
  category: string;          // e.g., Yantra, Idol, Cure
  description?: string;
  images: string[];
  price: number;
  discountPrice?: number;
  stock: number;
  sku?: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  material?: string;
  color?: string;
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

const vastuSchema = new Schema<IVastuProduct>(
  {
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
  },
  { timestamps: true }
);

export default model<IVastuProduct>("vastuProduct", vastuSchema);
