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
exports.registerUser = registerUser;
exports.sendOTPController = sendOTPController;
exports.getAll = getAll;
exports.getById = getById;
exports.loginByEmailAndPassword = loginByEmailAndPassword;
exports.loginByMobileAndOTP = loginByMobileAndOTP;
exports.verifyOTP = verifyOTP;
exports.disableAccout = disableAccout;
exports.updateUserById = updateUserById;
exports.deleteUser = deleteUser;
exports.createUser = createUser;
const userService_1 = require("../services/userService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield userService_1.UserService.registerUser(req.body);
            res.status(200).json(newUser);
        }
        catch (error) {
            res.status(400).json(error);
        }
    });
}
function sendOTPController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { emailOrMobile, country_code } = req.body;
        try {
            const otp = yield userService_1.UserService.sendOTP(emailOrMobile, country_code);
            res.status(200).json({ message: 'OTP sent successfully.', otp });
        }
        catch (error) {
            console.error('Error sending OTP:', error);
            res.status(500).json({ error: 'Failed to send OTP.' });
        }
    });
}
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.UserService.getAll();
            res.status(200).json({ message: 'find successfully.', data });
        }
        catch (error) {
            console.error('Error sending OTP:', error);
            res.status(500).json({ error: 'Failed to send OTP.' });
        }
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = yield userService_1.UserService.getById(id);
            res.status(200).json({ message: 'find successfully.', data, status: "success", statusCode: 200 });
        }
        catch (error) {
            console.error('Error sending OTP:', error);
            res.status(500).json({ error: 'Failed to send OTP.' });
        }
    });
}
function loginByEmailAndPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield userService_1.UserService.loginByEmailAndPassword(email, password);
            if (user) {
                res.json({ message: 'Login successful', user });
            }
            else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
function loginByMobileAndOTP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { mobile, country_code } = req.body;
            const user = yield userService_1.UserService.sendOTP(mobile, country_code);
            res.status(200).json({ user });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
function verifyOTP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { mobile, otp } = req.body;
            const isVerified = yield userService_1.UserService.verifyOTP(mobile, otp);
            if (!isVerified.status) {
                res.status(isVerified.statusCode).json({ isVerified });
                return;
            }
            const user = isVerified.data;
            const payload = {
                userId: user._id,
                mobile: user.mobile,
                role: user.role,
            };
            const token = jsonwebtoken_1.default.sign(payload, "myvastuastro_secrete_key", { expiresIn: '31d' });
            res.status(200).json({ isVerified, token });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
function disableAccout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, status } = req.params;
            const isUpdated = yield userService_1.UserService.disableAccout(id, status);
            console.log(isUpdated);
            if (isUpdated) {
                if (status === "0") {
                    res.status(200).json({ status: true,
                        message: "User account deleted successfully.",
                        statusCode: 200 });
                }
                else {
                    res.status(200).json({ status: true,
                        message: "User account activated successfully.",
                        statusCode: 200 });
                }
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "User account not found or update failed.",
                    statusCode: 404,
                });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error.', status: false, statusCode: 500 });
        }
    });
}
function updateUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield userService_1.UserService.updateUser(id, req.body);
            if (user) {
                res.status(200).json({ message: 'Update successful', data: user, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: user });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield userService_1.UserService.deleteUser(id);
            if (user) {
                res.status(200).json({ message: 'Delete successful', data: user, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: user });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'User not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userService_1.UserService.createUser(req.body);
            if (user) {
                res.status(200).json({ message: 'Submit successful', data: user, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: user });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
