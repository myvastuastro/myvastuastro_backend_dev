import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["credit", "debit"], required: true }, // credit (add), debit (spend)
    amount: { type: Number, required: true },
    description: { type: String },
    transactionId: { type: String }, 
    paymentMethod: { type: String, enum: ["razorpay", "wallet", "razorpayx"], default: "razorpay" },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    serviceType: { type: String, enum: ["vastuimportantcall","vastuquestion", "remedies", "consultation", "astroquestion", "chat", "astrochat"], required: false },
    vastuAstrologerId: { type: mongoose.Schema.Types.ObjectId, ref: "vastuAstrologer" },
    astrologerId: {type: mongoose.Schema.Types.ObjectId, ref: "user",required: true, index: true},
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "company" },

    status: {
      type: String,
      enum: ["pending", "completed", "failed", "canceled", "success"],
      default: "pending",
    },
    date: { type: Date, default: Date.now },
  },
  { _id: false }
);

const walletSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    astrologerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },     // astrologer
    vastuAstrologerId: { type: mongoose.Schema.Types.ObjectId, ref: "vastuAstrologer" },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "company" },

    // 👇 Company wallet
    // company: { type: Boolean, default: false },
    balance: { type: Number, default: 0, min: 0  },
    transactions: [transactionSchema],
  },
  { timestamps: true }
);

// Ensure only one wallet per owner type
walletSchema.index({ userId: 1 }, { unique: true, sparse: true });
walletSchema.index({ astrologerId: 1 }, { unique: true, sparse: true });
walletSchema.index({ vastuAstrologerId: 1 }, { unique: true, sparse: true });
walletSchema.index({ company: 1 }, { unique: true, sparse: true }); // only one company wallet
// ✅ Optional: allow quick lookups by company flag
const walletModel = mongoose.model("wallet", walletSchema);

export default walletModel;
