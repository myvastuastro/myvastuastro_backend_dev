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
exports.createComprehensive = createComprehensive;
exports.getComprehensive = getComprehensive;
exports.updateComprehensive = updateComprehensive;
exports.deleteComprehensive = deleteComprehensive;
exports.getAllComprehensives = getAllComprehensives;
const comprehensiveFreeCallService_1 = require("../services/comprehensiveFreeCallService");
function createComprehensive(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comprehensive = yield comprehensiveFreeCallService_1.ComprehensiveFreeCallService.createComprehensive(req.body);
            if (comprehensive) {
                res.status(200).json({ message: 'Submit successful', data: comprehensive, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getComprehensive(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const comprehensive = yield comprehensiveFreeCallService_1.ComprehensiveFreeCallService.getById(id);
            if (comprehensive) {
                res.status(200).json({ message: 'Find successful', data: comprehensive, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateComprehensive(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const comprehensive = yield comprehensiveFreeCallService_1.ComprehensiveFreeCallService.updateComprehensive(id, req.body);
            if (comprehensive) {
                res.status(200).json({ message: 'Update successful', data: comprehensive, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteComprehensive(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const comprehensive = yield comprehensiveFreeCallService_1.ComprehensiveFreeCallService.deleteComprehensive(id);
            if (comprehensive) {
                res.status(200).json({ message: 'Delete successful', data: comprehensive, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllComprehensives(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comprehensive = yield comprehensiveFreeCallService_1.ComprehensiveFreeCallService.getAll();
            if (comprehensive) {
                res.status(200).json({ message: 'Find successful', data: comprehensive, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensive });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Comprehensive not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
