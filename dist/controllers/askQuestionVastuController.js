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
exports.answerQuestionVastu = void 0;
exports.createAskQuestionVastu = createAskQuestionVastu;
exports.getAskQuestionByUserIdVastu = getAskQuestionByUserIdVastu;
exports.updateAskQuestionVastu = updateAskQuestionVastu;
exports.deleteAskQuestionVastu = deleteAskQuestionVastu;
exports.getAllAskQuestionsVastu = getAllAskQuestionsVastu;
const askQuestionVastuService_1 = require("../services/askQuestionVastuService");
function createAskQuestionVastu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const askQuestion = yield askQuestionVastuService_1.AskQuestionVastuService.createAskQuestionVastu(req.body);
            if (askQuestion) {
                res.status(200).json({ message: 'Submit successful', data: askQuestion, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAskQuestionByUserIdVastu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const askQuestion = yield askQuestionVastuService_1.AskQuestionVastuService.getAskQuestionByUserIdVastu(userId);
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
function updateAskQuestionVastu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestion = yield askQuestionVastuService_1.AskQuestionVastuService.updateAskQuestionVastu(id, req.body);
            if (askQuestion) {
                res.status(200).json({ message: 'Update successful', data: askQuestion, status: "success", statusCode: 200 });
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
function deleteAskQuestionVastu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestion = yield askQuestionVastuService_1.AskQuestionVastuService.deleteAskQuestionVastu(id);
            if (askQuestion) {
                res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
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
function getAllAskQuestionsVastu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const askQuestion = yield askQuestionVastuService_1.AskQuestionVastuService.getAllAskQuestionsVastu();
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
const answerQuestionVastu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { answer, vastuAstrologerId } = req.body;
        const updated = yield askQuestionVastuService_1.AskQuestionVastuService.answerQuestionVastu(req.params.id, answer, vastuAstrologerId);
        if (!updated) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
        return res.json({ success: true, data: updated });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});
exports.answerQuestionVastu = answerQuestionVastu;
