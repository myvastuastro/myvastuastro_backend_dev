"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalkToAstrologerService = void 0;
const talkToAstrologerRepository_1 = require("../repo/talkToAstrologerRepository");
class TalkToAstrologerService {
    static createTalkToAstrologer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, bio, expertise, languages, experienceYears, feePerMinChat, feePerMinCall, feePerMinVideo, file, schedule, mobile, email, astrologerId } = data;
                let fileUrl;
                if (file) {
                    fileUrl = file.path;
                }
                const astrologer = yield talkToAstrologerRepository_1.TalkToAstrologerRepository.createTalkToAstrologer({
                    name,
                    bio,
                    file: fileUrl,
                    expertise,
                    languages,
                    experienceYears,
                    feePerMinChat,
                    feePerMinCall,
                    feePerMinVideo,
                    schedule,
                    mobile,
                    email,
                    astrologerId
                });
                return astrologer;
            }
            catch (error) {
                throw new Error("Could not create astrologer");
            }
        });
    }
    static getTalkToAstrologerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.getTalkToAstrologerById(id);
            }
            catch (error) {
                throw new Error("Could not get astrologer");
            }
        });
    }
    static getAllTalkToAstrologers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.getAllTalkToAstrologer();
            }
            catch (error) {
                throw new Error("Could not get astrologers");
            }
        });
    }
    static updateTalkToAstrologer(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.updateTalkToAstrologer(id, data);
            }
            catch (error) {
                throw new Error("Could not update astrologer");
            }
        });
    }
    static deleteTalkToAstrologer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.deleteTalkToAstrologer(id);
            }
            catch (error) {
                throw new Error("Could not delete astrologer");
            }
        });
    }
    static toggleService(astrologerId, serviceKey, isEnabled) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.toggleService(astrologerId, serviceKey, isEnabled);
            }
            catch (error) {
                throw new Error("Could not toggle service");
            }
        });
    }
    static setOnlineStatus(astrologerId, isOnline) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.setOnlineStatus(astrologerId, isOnline);
            }
            catch (error) {
                throw new Error("Could not update online status");
            }
        });
    }
    static updateSchedule(astrologerId, schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.updateSchedule(astrologerId, schedule);
            }
            catch (error) {
                throw new Error("Could not update schedule time");
            }
        });
    }
    static addReview(astrologerId, reviewData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const astrologer = yield talkToAstrologerRepository_1.TalkToAstrologerRepository.findById(astrologerId);
                if (!astrologer)
                    throw new Error("Astrologer not found");
                // Push new review
                astrologer.reviews.push(reviewData);
                // Update reviews count
                astrologer.reviewsCount = astrologer.reviews.length;
                // Recalculate average rating
                const totalRating = astrologer.reviews.reduce((acc, r) => acc + r.rating, 0);
                astrologer.rating = totalRating / astrologer.reviewsCount;
                return yield talkToAstrologerRepository_1.TalkToAstrologerRepository.save(astrologer);
            }
            catch (error) {
                throw new Error("Could not create astrologer");
            }
        });
    }
    static getReviews(astrologerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const astrologer = yield talkToAstrologerRepository_1.TalkToAstrologerRepository.findById(astrologerId);
            if (!astrologer)
                throw new Error("Astrologer not found");
            return astrologer.reviews;
        });
    }
}
exports.TalkToAstrologerService = TalkToAstrologerService;
