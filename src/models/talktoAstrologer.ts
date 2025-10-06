import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // who gave review
    username: { type: String, required: true }, // optional: store name for quick access
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now }
});


const astrologerSchema = new mongoose.Schema({
    astrologerId: {
        type: mongoose.Types.ObjectId,
        ref: "user", // reference user table
        required: true
    },
    name: { type: String, required: true },
    bio: String,
    file: String,
    mobile: String,
    email: String,
    expertise: [String], // ["Vedic", "Tarot", "Numerology"]
    languages: [String],
    experienceYears: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    reviews: [reviewSchema], // ⭐ Add reviews array

    // Fee structure
    feePerMinChat: { type: Number, required: true },
    feePerMinCall: { type: Number, required: true },
    feePerMinVideo: { type: Number, required: true },

    // Availability
    isOnline: { type: Boolean, default: false },

    // Toggle individual services
    services: {
        chat: { type: Boolean, default: true },
        audio: { type: Boolean, default: true },
        video: { type: Boolean, default: true },
        report: { type: Boolean, default: true },  // e.g. Kundli report
    },

    // Weekly schedule
    schedule: {
        type: Object, // store JSON like { "Monday": ["09:00-12:00"], "Tuesday": ["14:00-18:00"] }
        default: {},
    },
}, { timestamps: true });

const astrologer = mongoose.model('talkToAstrologer', astrologerSchema);
export default astrologer;