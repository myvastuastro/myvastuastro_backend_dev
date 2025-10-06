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
exports.uploadComprehensiveProfessionalController = uploadComprehensiveProfessionalController;
exports.getComprehensiveProfessionalsController = getComprehensiveProfessionalsController;
exports.updateComprehensiveProfessionalsController = updateComprehensiveProfessionalsController;
exports.getComprehensiveProfessionalsByUserId = getComprehensiveProfessionalsByUserId;
exports.getComprehensiveProfessionalsById = getComprehensiveProfessionalsById;
const comprehensiveProfessionalService_1 = require("../services/comprehensiveProfessionalService");
function uploadComprehensiveProfessionalController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const file = req.file;
            let fileUrl = "";
            if (req.body.floorPlan == 'true') {
                if (!file) {
                    res.status(400).json({ message: "File is required" });
                }
                fileUrl = file.path;
            }
            const comprehensiveProfessional = yield comprehensiveProfessionalService_1.ComprehensiveProfessionalService.uploadComprehensiveProfessional(req.body, fileUrl);
            if (comprehensiveProfessional) {
                res.status(200).json({
                    status: true,
                    message: "ComprehensiveProfessional file uploaded and payment order created",
                    data: comprehensiveProfessional,
                    statusCode: 200,
                });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
            }
        }
        catch (error) {
            res.status(500).json({ status: true, message: "Error uploading product", data: error, statusCode: 500 });
        }
    });
}
;
function getComprehensiveProfessionalsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comprehensiveProfessional = yield comprehensiveProfessionalService_1.ComprehensiveProfessionalService.listComprehensiveProfessionals();
            if (comprehensiveProfessional) {
                res.status(200).json({ message: 'Find successful', data: comprehensiveProfessional, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching Comprehensive Professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function updateComprehensiveProfessionalsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params;
            const comprehensiveProfessional = yield comprehensiveProfessionalService_1.ComprehensiveProfessionalService.updateComprehensiveProfessionals(id, req.body);
            if (comprehensiveProfessional) {
                res.status(200).json({ message: 'Update successful', data: comprehensiveProfessional, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching Comprehensive Professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getComprehensiveProfessionalsByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = req.params;
            const comprehensiveProfessional = yield comprehensiveProfessionalService_1.ComprehensiveProfessionalService.getComprehensiveProfessionalsByUserId(userId);
            if (comprehensiveProfessional) {
                res.status(200).json({ message: 'Find successful', data: comprehensiveProfessional, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching Comprehensive Professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getComprehensiveProfessionalsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestion = yield comprehensiveProfessionalService_1.ComprehensiveProfessionalService.getComprehensiveProfessionalsById(id);
            if (askQuestion) {
                res.status(200).json({ message: 'Find successful', data: askQuestion, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
