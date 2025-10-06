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
exports.createToken = createToken;
exports.getToken = getToken;
exports.updateToken = updateToken;
exports.deleteToken = deleteToken;
exports.getAllTokens = getAllTokens;
const tokenService_1 = require("../services/tokenService");
function createToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield tokenService_1.TokenService.createToken(req.body);
            if (token) {
                res.status(200).json({ message: 'Submit successful', data: token, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const token = yield tokenService_1.TokenService.getById(id);
            if (token) {
                res.status(200).json({ message: 'Find successful', data: token, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const token = yield tokenService_1.TokenService.updateToken(id, req.body);
            if (token) {
                res.status(200).json({ message: 'Update successful', data: token, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const token = yield tokenService_1.TokenService.deleteToken(id);
            if (token) {
                res.status(200).json({ message: 'Delete successful', data: token, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllTokens(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield tokenService_1.TokenService.getAll();
            if (token) {
                res.status(200).json({ message: 'Find successful', data: token, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: token });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Token not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
