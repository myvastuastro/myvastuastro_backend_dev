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
exports.createVastuAstrologer = createVastuAstrologer;
exports.getVastuAstrologer = getVastuAstrologer;
exports.updateVastuAstrologer = updateVastuAstrologer;
exports.deleteVastuAstrologer = deleteVastuAstrologer;
exports.getAllVastuAstrologers = getAllVastuAstrologers;
const vastuAstrologerService_1 = require("../services/vastuAstrologerService");
function createVastuAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const file = req.file;
            if (!file) {
                res.status(400).json({ message: 'Image is required', status: 'fail', statusCode: 400 });
                return;
            }
            const fileSize = file.size || 0;
            if (fileSize === 0) {
                res.status(400).json({ message: 'Uploaded file is empty', status: 'fail' });
                return;
            }
            const fileUrl = file.path;
            const vastuAstrologer = yield vastuAstrologerService_1.VastuAstrologerService.createVastuAstrologer(req.body, fileUrl);
            if (vastuAstrologer) {
                res.status(200).json({ message: 'Submit successful', data: vastuAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getVastuAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const vastuAstrologer = yield vastuAstrologerService_1.VastuAstrologerService.getById(id);
            if (vastuAstrologer) {
                res.status(200).json({ message: 'Find successful', data: vastuAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateVastuAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const file = req.file;
            let fileUrl = file.location || file.path;
            const vastuAstrologer = yield vastuAstrologerService_1.VastuAstrologerService.updateAstrologer(id, req.body, fileUrl);
            console.log(vastuAstrologer);
            if (vastuAstrologer) {
                res.status(200).json({ message: 'Update successful', data: vastuAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteVastuAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const vastuAstrologer = yield vastuAstrologerService_1.VastuAstrologerService.deleteVastuAstrologer(id);
            if (vastuAstrologer) {
                res.status(200).json({ message: 'Delete successful', data: vastuAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllVastuAstrologers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vastuAstrologer = yield vastuAstrologerService_1.VastuAstrologerService.getAll();
            if (vastuAstrologer) {
                res.status(200).json({ message: 'Find successful', data: vastuAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'VastuAstrologer not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
