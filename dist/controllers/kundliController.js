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
exports.createKundli = createKundli;
exports.getKundliById = getKundliById;
exports.getAllKundlis = getAllKundlis;
const kundliService_1 = require("../services/kundliService");
// ✅ Create single kundli
function createKundli(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const kundli = yield kundliService_1.KundliService.createKundli(req.body);
            console.log("kundli", kundli);
            if (kundli) {
                res.status(200).json({ message: 'Submit successful', data: kundli, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: kundli });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get single kundli by ID
function getKundliById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const kundli = yield kundliService_1.KundliService.getByIdKundli(req.params.id);
            if (kundli) {
                res.status(200).json({ message: 'Find successful', data: kundli, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: kundli });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get all kundlis
function getAllKundlis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const kundlis = yield kundliService_1.KundliService.getAllKundli();
            if (kundlis) {
                res.status(200).json({ message: 'Kundlis find successfully', data: kundlis, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: kundlis });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
