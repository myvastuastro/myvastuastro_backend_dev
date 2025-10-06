import mongoose, { Document, Schema } from "mongoose";
const partnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dob: { type: Date, required: true },
    birthTime: { type: String, required: true },
    birthPlace: { type: String, required: true }
});


const matchMakingSchema = new mongoose.Schema(
  {
    boy: { type: partnerSchema, required: true },
    girl: { type: partnerSchema, required: true },
    compatibilityScore: { type: Number, default: null }
  },
  { timestamps: true }
);
const matchMaking = mongoose.model('matchMaking', matchMakingSchema);
export default matchMaking;