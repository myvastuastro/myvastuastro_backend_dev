"use strict";
// repositories/contactRepository.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VastuAstrologerRepository = void 0;
const vastuAstrologer_1 = __importDefault(require("../models/vastuAstrologer"));
class VastuAstrologerRepository {
    static createAstrologer(data, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, exp, charge, industryExp, commercialExp, residentialExp, availability, projectsAcross, countriesAcrossTheWorld, skills, educationBackground, rating, satisfiedUsers, reviews } = data;
                const parsedAvailability = typeof availability === 'string'
                    ? JSON.parse(availability)
                    : availability;
                const newAstrologer = yield vastuAstrologer_1.default.create({
                    name,
                    image,
                    exp,
                    charge,
                    industryExp,
                    commercialExp,
                    residentialExp,
                    availability: parsedAvailability,
                    projectsAcross,
                    countriesAcrossTheWorld,
                    skills: Array.isArray(skills)
                        ? skills
                        : typeof skills === "string"
                            ? skills.split(",").map((skill) => skill.trim())
                            : [],
                    educationBackground,
                    rating,
                    satisfiedUsers,
                    reviews
                });
                return newAstrologer;
            }
            catch (error) {
                console.error('Error creating vastu astrogler:', error);
                throw error;
            }
        });
    }
    static getAstrologerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuAstrologer_1.default.findById(id);
        });
    }
    static updateAstrologer(id, data, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Parse availability if it's a string (e.g., from form-data)
                if (data.availability && typeof data.availability === 'string') {
                    data.availability = JSON.parse(data.availability);
                }
                if (image) {
                    data.image = image;
                }
                return yield vastuAstrologer_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }, { new: true });
            }
            catch (error) {
                console.error('Error updating vastu astrologer:', error);
                throw error;
            }
        });
    }
    static deleteVastuAstrologer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuAstrologer_1.default.deleteOne({ _id: id });
        });
    }
    static getAllAstrologers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vastuAstrologer_1.default.find();
        });
    }
}
exports.VastuAstrologerRepository = VastuAstrologerRepository;
