import { Schema, model, Document, Types } from "mongoose";

export interface ICartItem {
  parentId: Types.ObjectId;
  productId: Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  userId: Types.ObjectId;
  items: ICartItem[];
}

const cartItemSchema = new Schema<ICartItem>(
  {
    parentId: { type: Schema.Types.ObjectId, ref: "AstrologyParent", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "AstrologyProduct", required: true },
    quantity: { type: Number, default: 1, min: 1 },
  },
  { _id: false }
);

const cartSchema = new Schema<ICart>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

export default model<ICart>("astrologyCart", cartSchema);
