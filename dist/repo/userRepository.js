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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = __importDefault(require("../models/user"));
const mongoose_1 = __importDefault(require("mongoose"));
class UserRepository {
    static createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.create(data);
                return { exists: false, message: "New user created successfully.", status: "success", data: user };
            }
            catch (error) {
                console.error('Error creating user:', error);
                throw error;
            }
        });
    }
    static checkEmailOrMobileExists(email, mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield user_1.default.findOne({
                $or: [
                    { email: email },
                    { mobile: mobile }
                ]
            });
            const exists = !!existingUser;
            const message = "Email or mobile already exists.";
            const status = "error";
            return { exists, message, status, data: {} };
        });
    }
    static updateUserOTP(emailOrMobile, otp, country_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const isMobile = /^\d{10}$/.test(emailOrMobile);
            const filter = isMobile
                ? { mobile: Number(emailOrMobile) }
                : { email: emailOrMobile.toLowerCase().trim() };
            return yield user_1.default.updateOne(filter, { otp, country_code });
        });
    }
    static findUserByEmailOrMobile(emailOrMobile) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = emailOrMobile.trim().toLowerCase();
            const isMobile = /^\d{10}$/.test(value); // very basic check
            const query = isMobile
                ? { mobile: parseInt(value, 10) }
                : { email: value };
            let data = yield user_1.default.findOne({ mobile: query.mobile });
            return data;
        });
    }
    static findByEmailAndPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findOne({ email, password });
        });
    }
    static findByMobileAndOtp(mobile, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findOne({ mobile: Number(mobile), otp });
        });
    }
    static findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.find({});
        });
    }
    static findOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findOne({ _id: id });
        });
    }
    static updateUserAccountStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.updateOne({ _id: new mongoose_1.default.Types.ObjectId(id) }, { $set: { status } });
        });
    }
    static updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findByIdAndUpdate(id, { $set: data }, { new: true });
        });
    }
    static deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.deleteOne({ _id: id });
        });
    }
}
exports.UserRepository = UserRepository;
