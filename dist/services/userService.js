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
exports.UserService = void 0;
const userRepository_1 = require("../repo/userRepository");
const otp_generator_1 = __importDefault(require("otp-generator"));
const otpSender_1 = require("../utils/otpSender");
const user_1 = __importDefault(require("../models/user"));
class UserService {
    static registerUser(emailOrMobile) {
        return __awaiter(this, void 0, void 0, function* () {
            const mobileExists = yield userRepository_1.UserRepository.checkEmailOrMobileExists(null, emailOrMobile);
            if (mobileExists.exists) {
                return mobileExists;
            }
            return userRepository_1.UserRepository.createUser(emailOrMobile);
        });
    }
    static sendOTP(mobile, country_code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository_1.UserRepository.findUserByEmailOrMobile(mobile);
                if ((user === null || user === void 0 ? void 0 : user.status) === 0) {
                    return {
                        status: false,
                        message: "Data is not present in our database. Please contact with MyVastuAstro Team",
                        statusCode: 200
                    };
                }
                // Create user if not exists
                if (!user) {
                    yield user_1.default.create({
                        mobile,
                        name: "Guest",
                        email: ""
                    });
                }
                // Validate mobile
                if (!mobile) {
                    return {
                        status: false,
                        message: "Mobile number is required",
                        statusCode: 400
                    };
                }
                // Set fixed OTP for specific number
                const otp = mobile === "7817976567"
                    ? "123456"
                    : otp_generator_1.default.generate(6, {
                        lowerCaseAlphabets: false,
                        upperCaseAlphabets: false,
                        specialChars: false
                    });
                // Update OTP
                yield userRepository_1.UserRepository.updateUserOTP(mobile, otp, country_code);
                // Send OTP
                const response = yield (0, otpSender_1.sendOTP)(mobile, otp, country_code);
                console.log(response.data);
                return {
                    status: true,
                    message: "OTP sent successfully",
                    statusCode: 200,
                    otp
                };
            }
            catch (error) {
                console.error("Error sending OTP:", error.message);
                return {
                    status: false,
                    message: "Something went wrong while sending OTP",
                    statusCode: 500
                };
            }
        });
    }
    static verifyOTP(mobile, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository_1.UserRepository.findByMobileAndOtp(mobile, otp);
                if (user.otp == otp) {
                    return {
                        status: true,
                        message: "OTP verified successfully",
                        statusCode: 200,
                        data: user
                    };
                }
                else {
                    return {
                        status: false,
                        message: "Invalid OTP or mobile number",
                        statusCode: 401,
                        data: user
                    };
                }
            }
            catch (error) {
                return {
                    status: false,
                    message: "Something went wrong while verifying OTP",
                    statusCode: 500,
                    data: {}
                };
            }
        });
    }
    static loginByEmailAndPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return userRepository_1.UserRepository.findByEmailAndPassword(email, password);
        });
    }
    static loginByMobileAndOTP(mobile, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            return userRepository_1.UserRepository.findByMobileAndOtp(mobile, otp);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository_1.UserRepository.findAllUser();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository_1.UserRepository.findOneUser(id);
        });
    }
    static disableAccout(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userRepository_1.UserRepository.updateUserAccountStatus(id, status);
            return result.modifiedCount > 0;
        });
    }
    static updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository_1.UserRepository.updateUser(id, data);
        });
    }
    static deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userRepository_1.UserRepository.deleteUser(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield userRepository_1.UserRepository.createUser(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
}
exports.UserService = UserService;
