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
exports.uploadProfessionalController = uploadProfessionalController;
exports.getProfessionalsController = getProfessionalsController;
exports.updateProfessionalsController = updateProfessionalsController;
exports.getProfessionalsByUserId = getProfessionalsByUserId;
exports.getProfessionalsById = getProfessionalsById;
exports.deleteProfessionalsById = deleteProfessionalsById;
const professionalService_1 = require("../services/professionalService");
function uploadProfessionalController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const file = req.file;
            // if (!file) {
            //    res.status(400).json({ message: 'File is required', status: 'fail' });
            //    return;
            // }
            let fileUrl = "";
            if (req.body.floorPlan == 'true') {
                if (!file) {
                    res.status(400).json({ message: "File is required" });
                }
                fileUrl = file.path;
            }
            const professional = yield professionalService_1.ProfessionalService.uploadProfessional(req.body, fileUrl);
            if (professional) {
                res.status(200).json({
                    status: true,
                    message: "Professional file uploaded and payment order created",
                    data: professional,
                    statusCode: 200,
                });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professional });
            }
        }
        catch (error) {
            res.status(500).json({ status: true, message: "Error uploading product", data: error, statusCode: 500 });
        }
    });
}
;
function getProfessionalsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const professionals = yield professionalService_1.ProfessionalService.listProfessionals();
            if (professionals) {
                res.status(200).json({ message: 'Find successful', data: professionals, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function updateProfessionalsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params;
            const professionals = yield professionalService_1.ProfessionalService.updateProfessionals(id, req.body);
            if (professionals) {
                res.status(200).json({ message: 'Update successful', data: professionals, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getProfessionalsByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = req.params;
            const professionals = yield professionalService_1.ProfessionalService.getProfessionalsByUserId(userId);
            if (professionals) {
                res.status(200).json({ message: 'Find successful', data: professionals, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getProfessionalsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params;
            const professionals = yield professionalService_1.ProfessionalService.getProfessionalsById(id);
            if (professionals) {
                res.status(200).json({ message: 'Find successful', data: professionals, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function deleteProfessionalsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestion = yield professionalService_1.ProfessionalService.deleteProfessionalsById(id);
            if (askQuestion) {
                res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Professional not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
