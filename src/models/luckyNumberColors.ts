import mongoose from "mongoose";
const luckyNumberColorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true },
    sign: { type: String, required: false },
    luckyNumber: { type: Number, required: false },
    luckyColor: { type: String, required: false }
}, {
    timestamps: true
});
const luckyNumberColor = mongoose.model('luckyNumberColor', luckyNumberColorSchema);
export default luckyNumberColor;