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
exports.createLuckyNumberColor = createLuckyNumberColor;
exports.getLuckyNumberColor = getLuckyNumberColor;
exports.updateLuckyNumberColor = updateLuckyNumberColor;
exports.deleteLuckyNumberColor = deleteLuckyNumberColor;
exports.getAllLuckyNumberColors = getAllLuckyNumberColors;
exports.searchLuckyNumberColor = searchLuckyNumberColor;
const luckyNumberColorService_1 = require("../services/luckyNumberColorService");
function createLuckyNumberColor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const luckyNumberColor = yield luckyNumberColorService_1.LuckyNumberColorService.createLuckyNumberColor(req.body);
            if (luckyNumberColor) {
                res.status(200).json({ message: 'Submit successful', data: luckyNumberColor, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getLuckyNumberColor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const luckyNumberColor = yield luckyNumberColorService_1.LuckyNumberColorService.getById(id);
            if (luckyNumberColor) {
                res.status(200).json({ message: 'Find successful', data: luckyNumberColor, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateLuckyNumberColor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const luckyNumberColor = yield luckyNumberColorService_1.LuckyNumberColorService.updateLuckyNumberColor(id, req.body);
            if (luckyNumberColor) {
                res.status(200).json({ message: 'Update successful', data: luckyNumberColor, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteLuckyNumberColor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const luckyNumberColor = yield luckyNumberColorService_1.LuckyNumberColorService.deleteLuckyNumberColor(id);
            if (luckyNumberColor) {
                res.status(200).json({ message: 'Delete successful', data: luckyNumberColor, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllLuckyNumberColors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const luckyNumberColor = yield luckyNumberColorService_1.LuckyNumberColorService.getAll();
            if (luckyNumberColor) {
                res.status(200).json({ message: 'Find successful', data: luckyNumberColor, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: luckyNumberColor });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function searchLuckyNumberColor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, dob } = req.query;
            if (!name && !dob) {
                res.status(400).json({ message: "Please provide name or dob", status: "fail", statusCode: 400, data: {} });
            }
            const luckyNumberColor = yield luckyNumberColorService_1.LuckyNumberColorService.searchLuckyNumberColor(name, dob);
            if (luckyNumberColor) {
                res.status(200).json({ message: 'Find successful', data: luckyNumberColor, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'LuckyNumberColor not found', status: "fail", statusCode: 400, data: luckyNumberColor });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Failed', status: "fail", statusCode: 500, data: error });
        }
    });
}
