import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
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
    address: {
        type: String,
        required: true
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" }


}, {
    timestamps: true
});

const company = mongoose.model('company', companySchema);
export default company;