import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  type: { type: String, enum: ["credit", "debit"], required: true }, // credit (add), debit (spend)
  vastuAstrologerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vastuAstrogler', // Product model reference
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'canceled'],
    default: 'pending',
  },
  transactionId: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['razorpay'],
    required: true,
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
    required: false,
  },
  razorpaySignature: {
    type: String,
    required: false,
  },
  description: { type: String },
  serviceType: { type: String, enum: ["question", "remedy", "consultation"], required: true },

}, {
  timestamps: true
});

const walletSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },

    // running balance for this user
    balance: { type: Number, default: 0 },

    // all payment + wallet transaction history
    transactions: [PaymentSchema],
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model('payment', PaymentSchema);

export default PaymentModel;
