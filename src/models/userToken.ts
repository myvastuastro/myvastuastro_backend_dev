import mongoose from "mongoose";
const userTokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: false
    },
    astrologerId: {
        type: mongoose.Types.ObjectId,
        ref: "user", // reference user collection for astrologers
        required: false
    },
    jwtToken: {
        type: String,
        required: false
    },
    deviceToken: {
        type: String,
        required: false
    },
    platform: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const userToken = mongoose.model('userToken', userTokenSchema);
export default userToken;