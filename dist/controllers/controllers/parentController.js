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
exports.createParent = createParent;
exports.getParentById = getParentById;
exports.getParentByUserId = getParentByUserId;
exports.updateParent = updateParent;
exports.deleteParent = deleteParent;
exports.getParentAll = getParentAll;
const parentService_1 = require("../../services/services/parentService");
function createParent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = Object.assign(Object.assign({}, req.body), { file: req.file });
            const parentService = yield parentService_1.ParentService.createParent(data);
            if (parentService) {
                res.status(200).json({ message: 'Submit successful', data: parentService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getParentById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parentService = yield parentService_1.ParentService.getParentById(id);
            if (parentService) {
                res.status(200).json({ message: 'Find successful', data: parentService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getParentByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const parentService = yield parentService_1.ParentService.getParentByUserId(userId);
            if (parentService) {
                res.status(200).json({ message: 'Find successful', data: parentService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateParent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parentService = yield parentService_1.ParentService.updateParent(id, req.body);
            if (parentService) {
                res.status(200).json({ message: 'Update successful', data: parentService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteParent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parentService = yield parentService_1.ParentService.deleteParent(id);
            if (parentService) {
                res.status(200).json({ message: 'Delete successful', data: parentService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getParentAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parentService = yield parentService_1.ParentService.getParentAll();
            if (parentService) {
                res.status(200).json({ message: 'Find successful', data: parentService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: parentService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Parent not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
