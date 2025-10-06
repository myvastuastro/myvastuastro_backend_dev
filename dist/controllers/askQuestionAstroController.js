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
exports.answerQuestionAstro = void 0;
exports.createAskQuestionAstro = createAskQuestionAstro;
exports.getAskQuestionAstroById = getAskQuestionAstroById;
exports.getAskQuestionAstroByUserId = getAskQuestionAstroByUserId;
exports.updateAskQuestionAstro = updateAskQuestionAstro;
exports.deleteAskQuestionAstro = deleteAskQuestionAstro;
exports.getAskQuestionAstroAll = getAskQuestionAstroAll;
const askQuestionAstroService_1 = require("../services/askQuestionAstroService");
function createAskQuestionAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = Object.assign(Object.assign({}, req.body), { file: req.file });
            const askQuestionAstro = yield askQuestionAstroService_1.AskQuestionAstroService.createAskQuestionAstro(data);
            if (askQuestionAstro) {
                res.status(200).json({ message: 'Submit successful', data: askQuestionAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAskQuestionAstroById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestionAstro = yield askQuestionAstroService_1.AskQuestionAstroService.getAskQuestionAstroById(id);
            if (askQuestionAstro) {
                res.status(200).json({ message: 'Find successful', data: askQuestionAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAskQuestionAstroByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const askQuestionAstro = yield askQuestionAstroService_1.AskQuestionAstroService.getAskQuestionAstroByUserId(userId);
            if (askQuestionAstro) {
                res.status(200).json({ message: 'Find successful', data: askQuestionAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateAskQuestionAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestionAstro = yield askQuestionAstroService_1.AskQuestionAstroService.updateAskQuestionAstro(id, req.body);
            if (askQuestionAstro) {
                res.status(200).json({ message: 'Update successful', data: askQuestionAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteAskQuestionAstro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestionAstro = yield askQuestionAstroService_1.AskQuestionAstroService.deleteAskQuestionAstro(id);
            if (askQuestionAstro) {
                res.status(200).json({ message: 'Delete successful', data: askQuestionAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAskQuestionAstroAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const askQuestionAstro = yield askQuestionAstroService_1.AskQuestionAstroService.getAskQuestionAstroAll();
            if (askQuestionAstro) {
                res.status(200).json({ message: 'Find successful', data: askQuestionAstro, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestionAstro });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
// ✅ Answer (Astrologer updates)
const answerQuestionAstro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { answer, astrologerId } = req.body;
        const updated = yield askQuestionAstroService_1.AskQuestionAstroService.answerQuestionAstro(req.params.id, answer, astrologerId);
        if (!updated) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
        return res.json({ success: true, data: updated });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});
exports.answerQuestionAstro = answerQuestionAstro;
