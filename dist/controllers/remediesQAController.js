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
exports.createRemediesQA = createRemediesQA;
exports.getRemediesQAByUserId = getRemediesQAByUserId;
exports.getRemediesQAById = getRemediesQAById;
exports.updateRemediesQA = updateRemediesQA;
exports.deleteRemediesQA = deleteRemediesQA;
exports.getAllRemediesQAs = getAllRemediesQAs;
const remediesQAService_1 = require("../services/remediesQAService");
function createRemediesQA(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const remediesQA = yield remediesQAService_1.RemediesQAService.createRemediesQA(req.body);
            if (remediesQA) {
                res.status(200).json({ message: 'Submit successful', data: remediesQA, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getRemediesQAByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const remediesQA = yield remediesQAService_1.RemediesQAService.getByUserId(userId);
            if (remediesQA) {
                res.status(200).json({ message: 'Find successful', data: remediesQA, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getRemediesQAById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const remediesQA = yield remediesQAService_1.RemediesQAService.getById(id);
            if (remediesQA) {
                res.status(200).json({ message: 'Find successful', data: remediesQA, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateRemediesQA(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const remediesQA = yield remediesQAService_1.RemediesQAService.updateRemediesQA(id, req.body);
            if (remediesQA) {
                res.status(200).json({ message: 'Update successful', data: remediesQA, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteRemediesQA(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const remediesQA = yield remediesQAService_1.RemediesQAService.deleteRemediesQA(id);
            if (remediesQA) {
                res.status(200).json({ message: 'Delete successful', data: remediesQA, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllRemediesQAs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const remediesQA = yield remediesQAService_1.RemediesQAService.getAll();
            if (remediesQA) {
                res.status(200).json({ message: 'Find successful', data: remediesQA, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: remediesQA });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'RemediesQA not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
