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
exports.createMatch = createMatch;
exports.getMatchById = getMatchById;
exports.getAllMatchs = getAllMatchs;
exports.updateMatch = updateMatch;
exports.deleteMatch = deleteMatch;
const matchService_1 = require("../services/matchService");
// ✅ Create single match
function createMatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const match = yield matchService_1.MatchService.createMatch(req.body);
            if (match) {
                res.status(200).json({ message: 'Submit successful', data: match, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get single match by ID
function getMatchById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const match = yield matchService_1.MatchService.getByIdMatch(req.params.id);
            if (match) {
                res.status(200).json({ message: 'Find successful', data: match, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get all matchs
function getAllMatchs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const matchs = yield matchService_1.MatchService.getAllMatch();
            if (matchs) {
                res.status(200).json({ message: 'Matchs find successfully', data: matchs, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: matchs });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Update match by ID
function updateMatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const match = yield matchService_1.MatchService.updateMatch(req.params.id, req.body);
            if (!match)
                return res.status(404).json({ message: "Match not found", status: "failed", statusCode: 404 });
            if (match) {
                res.status(200).json({ message: 'Match update successful', data: match, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Delete match by ID
function deleteMatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const match = yield matchService_1.MatchService.deleteMatch(req.params.id);
            if (!match)
                return res.status(404).json({ message: "Match not found", status: "failed", statusCode: 404 });
            if (match) {
                res.status(200).json({ message: 'Match deleted successfully', data: match, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: match });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
