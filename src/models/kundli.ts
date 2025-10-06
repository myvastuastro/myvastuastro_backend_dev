import mongoose, { Schema } from "mongoose";
const kundliSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    birthDateTime: { type: Date, required: true },
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    hours: { type: Number, required: true },
    minutes: { type: Number, required: true },
    seconds: { type: Number, required: true },
    birthPlace: { type: String, required: true },
    timezone: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    chart: { type: Schema.Types.Mixed },
}, {
  timestamps: true
});
const kundli = mongoose.model('kundli', kundliSchema);
export default kundli;