"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true }, // who gave review
    username: { type: String, required: true }, // optional: store name for quick access
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now }
});
const astrologerSchema = new mongoose_1.default.Schema({
    astrologerId: {
        type: mongoose_1.default.Types.ObjectId,
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
        report: { type: Boolean, default: true }, // e.g. Kundli report
    },
    // Weekly schedule
    schedule: {
        type: Object, // store JSON like { "Monday": ["09:00-12:00"], "Tuesday": ["14:00-18:00"] }
        default: {},
    },
}, { timestamps: true });
const astrologer = mongoose_1.default.model('talkToAstrologer', astrologerSchema);
exports.default = astrologer;
