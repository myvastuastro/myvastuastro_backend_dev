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
exports.uploadVastuTipController = uploadVastuTipController;
exports.getVastuTipsController = getVastuTipsController;
exports.updateVastuTipsController = updateVastuTipsController;
exports.getVastuTipsControllerById = getVastuTipsControllerById;
exports.deleteVastuTipsController = deleteVastuTipsController;
const vastuTipService_1 = require("../services/vastuTipService");
function uploadVastuTipController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const { title, description } = req.body;
            const files = req.files;
            const file = (_a = files === null || files === void 0 ? void 0 : files.file) === null || _a === void 0 ? void 0 : _a[0];
            if (!file) {
                res.status(400).json({ message: "File is required" });
            }
            const fileUrl = file.path; // image or main file URL
            const audio = (_b = files === null || files === void 0 ? void 0 : files.audio) === null || _b === void 0 ? void 0 : _b[0];
            if (!audio) {
                res.status(400).json({ message: "Aduio file is required" });
            }
            const audioUrl = audio.path; // audio file URL
            const product = yield vastuTipService_1.VastuTipService.uploadProduct({ title, description, fileUrl, audioUrl });
            if (product) {
                res.status(200).json({ message: 'file uploaded successful', data: product, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: product });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error uploading product', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getVastuTipsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield vastuTipService_1.VastuTipService.listProducts();
            if (products) {
                res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function updateVastuTipsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const products = yield vastuTipService_1.VastuTipService.updateProducts(id, req.body);
            if (products) {
                res.status(200).json({ message: 'Update successful', data: products, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getVastuTipsControllerById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const vastuAstrologer = yield vastuTipService_1.VastuTipService.getVastuTipsControllerById(id);
            if (vastuAstrologer) {
                res.status(200).json({ message: 'Find successful', data: vastuAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Vastuztips not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteVastuTipsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const support = yield vastuTipService_1.VastuTipService.deleteVastuTipsController(id);
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
