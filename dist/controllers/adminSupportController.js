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
exports.createAdminSupport = createAdminSupport;
exports.getAdminSupport = getAdminSupport;
exports.updateAdminSupport = updateAdminSupport;
exports.deleteAdminSupport = deleteAdminSupport;
exports.getAllAdminSupports = getAllAdminSupports;
const adminSupportService_1 = require("../services/adminSupportService");
function createAdminSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const support = yield adminSupportService_1.AdminSupportService.createOrUpdateSupport(req.body);
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
function getAdminSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield adminSupportService_1.AdminSupportService.getById(id);
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
function updateAdminSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield adminSupportService_1.AdminSupportService.updateSupport(id, req.body);
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
function deleteAdminSupport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield adminSupportService_1.AdminSupportService.deleteSupport(id);
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
function getAllAdminSupports(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const support = yield adminSupportService_1.AdminSupportService.getAll();
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
