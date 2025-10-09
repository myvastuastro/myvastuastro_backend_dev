import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  status: { type: String, enum: ["pending", "answered", "in_progress"], default: "pending" },
  vastuAstrologerId: { type: String, default: null },
  answer: { type: String, default: null },
}, {
  timestamps: true
});

const question = mongoose.model('vastuQuestion', questionSchema);
export default question;