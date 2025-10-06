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
exports.createTalkToAdvisor = createTalkToAdvisor;
exports.getTalkToAdvisor = getTalkToAdvisor;
exports.updateTalkToAdvisor = updateTalkToAdvisor;
exports.deleteTalkToAdvisor = deleteTalkToAdvisor;
exports.getAllTalkToAdvisors = getAllTalkToAdvisors;
const talkToAdvisorService_1 = require("../services/talkToAdvisorService");
function createTalkToAdvisor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const talkToAdvisorService = yield talkToAdvisorService_1.TalkToAdvisorService.createTalkToAdvisor(req.body);
            if (talkToAdvisorService) {
                res.status(200).json({ message: 'Submit successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getTalkToAdvisor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const talkToAdvisorService = yield talkToAdvisorService_1.TalkToAdvisorService.getById(id);
            if (talkToAdvisorService) {
                res.status(200).json({ message: 'Find successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateTalkToAdvisor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const talkToAdvisorService = yield talkToAdvisorService_1.TalkToAdvisorService.updateAdvisor(id, req.body);
            if (talkToAdvisorService) {
                res.status(200).json({ message: 'Update successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteTalkToAdvisor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const talkToAdvisorService = yield talkToAdvisorService_1.TalkToAdvisorService.deleteTalkToAdvisor(id);
            if (talkToAdvisorService) {
                res.status(200).json({ message: 'Delete successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllTalkToAdvisors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const talkToAdvisorService = yield talkToAdvisorService_1.TalkToAdvisorService.getAll();
            if (talkToAdvisorService) {
                res.status(200).json({ message: 'Find successful', data: talkToAdvisorService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAdvisorService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'TalkToAdvisor not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
