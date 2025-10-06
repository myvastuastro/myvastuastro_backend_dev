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
exports.createMyVastuAstro = createMyVastuAstro;
exports.getMyVastuAstro = getMyVastuAstro;
exports.updateMyVastuAstro = updateMyVastuAstro;
exports.deleteMyVastuAstro = deleteMyVastuAstro;
exports.getAllMyVastuAstros = getAllMyVastuAstros;
const myVastuAstroService_1 = require("../services/myVastuAstroService");
function createMyVastuAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const myVastuAstro = yield myVastuAstroService_1.MyVastuAstroService.createMyVastuAstro(req.body);
            if (myVastuAstro) {
                res.status(200).json({ message: 'Submit successful', data: myVastuAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getMyVastuAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const myVastuAstro = yield myVastuAstroService_1.MyVastuAstroService.getById(userId);
            if (myVastuAstro) {
                res.status(200).json({ message: 'Find successful', data: myVastuAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateMyVastuAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const myVastuAstro = yield myVastuAstroService_1.MyVastuAstroService.updateMyVastuAstro(id, req.body);
            if (myVastuAstro) {
                res.status(200).json({ message: 'Update successful', data: myVastuAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteMyVastuAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const myVastuAstro = yield myVastuAstroService_1.MyVastuAstroService.deleteMyVastuAstro(id);
            if (myVastuAstro) {
                res.status(200).json({ message: 'Delete successful', data: myVastuAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllMyVastuAstros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const myVastuAstro = yield myVastuAstroService_1.MyVastuAstroService.getAll();
            if (myVastuAstro) {
                res.status(200).json({ message: 'Find successful', data: myVastuAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: myVastuAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'MyVastuAstro not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
