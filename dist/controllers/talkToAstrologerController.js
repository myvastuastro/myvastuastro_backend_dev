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
exports.createTalkToAstrologer = createTalkToAstrologer;
exports.getTalkToAstrologerById = getTalkToAstrologerById;
exports.updateTalkToAstrologer = updateTalkToAstrologer;
exports.deleteTalkToAstrologer = deleteTalkToAstrologer;
exports.getTalkToAstrologerAll = getTalkToAstrologerAll;
exports.toggleService = toggleService;
exports.setOnlineStatus = setOnlineStatus;
exports.updateSchedule = updateSchedule;
exports.addReview = addReview;
exports.getReviews = getReviews;
const talkToAstrologerService_1 = require("../services/talkToAstrologerService");
function createTalkToAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = Object.assign(Object.assign({}, req.body), { file: req.file, schedule: req.body.schedule ? JSON.parse(req.body.schedule) : {} });
            const talkToAstrologer = yield talkToAstrologerService_1.TalkToAstrologerService.createTalkToAstrologer(data);
            if (talkToAstrologer) {
                res.status(200).json({ message: 'Submit successful', data: talkToAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getTalkToAstrologerById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const talkToAstrologer = yield talkToAstrologerService_1.TalkToAstrologerService.getTalkToAstrologerById(id);
            if (talkToAstrologer) {
                res.status(200).json({ message: 'Find successful', data: talkToAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateTalkToAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = Object.assign(Object.assign({}, req.body), { schedule: req.body.schedule ? JSON.parse(req.body.schedule) : undefined });
            const talkToAstrologer = yield talkToAstrologerService_1.TalkToAstrologerService.updateTalkToAstrologer(id, data);
            if (talkToAstrologer) {
                res.status(200).json({ message: 'Update successful', data: talkToAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteTalkToAstrologer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const talkToAstrologer = yield talkToAstrologerService_1.TalkToAstrologerService.deleteTalkToAstrologer(id);
            if (talkToAstrologer) {
                res.status(200).json({ message: 'Delete successful', data: talkToAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getTalkToAstrologerAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const talkToAstrologer = yield talkToAstrologerService_1.TalkToAstrologerService.getAllTalkToAstrologers();
            if (talkToAstrologer) {
                res.status(200).json({ message: 'Find successful', data: talkToAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: talkToAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function toggleService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { serviceKey, isEnabled } = req.body;
            const updated = yield talkToAstrologerService_1.TalkToAstrologerService.toggleService(req.params.id, serviceKey, isEnabled);
            if (updated) {
                res.status(200).json({ message: 'Update successful', data: updated, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updated });
            }
            // res.json({ success: true, data: updated });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    });
}
function setOnlineStatus(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { isOnline } = req.body;
            const updated = yield talkToAstrologerService_1.TalkToAstrologerService.setOnlineStatus(req.params.id, isOnline);
            if (updated) {
                res.status(200).json({ message: 'Set online successful', data: updated, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updated });
            }
            //  res.json({ success: true, data: updated });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    });
}
function updateSchedule(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schedule = req.body;
            const updated = yield talkToAstrologerService_1.TalkToAstrologerService.updateSchedule(req.params.id, schedule);
            if (updated) {
                res.status(200).json({ message: 'Update successful', data: updated, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updated });
            }
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function addReview(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { astrologerId } = req.params;
            const { userId, username, rating, comment } = req.body;
            const updatedAstrologer = yield talkToAstrologerService_1.TalkToAstrologerService.addReview(astrologerId, {
                userId,
                username,
                rating,
                comment
            });
            if (updatedAstrologer) {
                res.status(200).json({ message: 'Submit successful', data: updatedAstrologer, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: updatedAstrologer });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getReviews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { astrologerId } = req.params;
            const reviews = yield talkToAstrologerService_1.TalkToAstrologerService.getReviews(astrologerId);
            if (reviews) {
                res.status(200).json({ message: 'Submit successful', data: reviews, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: reviews });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
