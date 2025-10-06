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
exports.createSupport = createSupport;
exports.getSupport = getSupport;
exports.updateSupport = updateSupport;
exports.deleteSupport = deleteSupport;
exports.getAllSupports = getAllSupports;
const supportService_1 = require("../services/supportService");
function createSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const support = yield supportService_1.SupportService.createSupport(req.body);
            if (support) {
                res.status(200).json({ message: 'Submit successful', data: support, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield supportService_1.SupportService.getById(id);
            if (support) {
                res.status(200).json({ message: 'Find successful', data: support, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield supportService_1.SupportService.updateSupport(id, req.body);
            if (support) {
                res.status(200).json({ message: 'Update successful', data: support, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield supportService_1.SupportService.deleteSupport(id);
            if (support) {
                res.status(200).json({ message: 'Delete successful', data: support, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllSupports(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const support = yield supportService_1.SupportService.getAll();
            if (support) {
                res.status(200).json({ message: 'Find successful', data: support, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
