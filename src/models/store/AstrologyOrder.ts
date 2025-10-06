import { Schema, model, Document, Types } from "mongoose";

export interface IOrder extends Document {
  userId: Types.ObjectId;
  items: {
    productId: Types.ObjectId;
    parentId: Types.ObjectId;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  addressId: Types.ObjectId; // delivery address reference
  paymentMethod: "COD" | "ONLINE";
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "AstrologyProduct", required: true },
        parentId: { type: Schema.Types.ObjectId, ref: "AstrologyParent", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
      }
    ],
    totalAmount: { type: Number, required: true },
    addressId: { type: Schema.Types.ObjectId, ref: "AstrologyAddress", required: true },
    paymentMethod: { type: String, enum: ["COD", "ONLINE"], required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default model<IOrder>("astrologyOrder", orderSchema);
