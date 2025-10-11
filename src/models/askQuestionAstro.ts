import mongoose from "mongoose";
const questionAstroSchema = new mongoose.Schema({
   userId: {
    type: mongoose.Types.ObjectId,
    ref: "user", 
    required: false
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: String, required: true },
    birthTime: { type: String, required: true },
    birthPlace: { type: String, required: true },
    question: { type: String, required: true },
    image: { type: String, required: false  },
    status: { type: String, enum: ["pending", "answered", "in_progress"], default: "pending" },
    astrologerId: { type: mongoose.Types.ObjectId,
    ref: "user", 
    required: false },
    answer: { type: String, default: null },
}, {
  timestamps: true
});

const questionAstro = mongoose.model('astroQuestion', questionAstroSchema);
export default questionAstro;