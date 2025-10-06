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
exports.deleteHoroscope = void 0;
exports.createHoroscope = createHoroscope;
exports.getHoroscopeById = getHoroscopeById;
exports.uploadHoroscopes = uploadHoroscopes;
exports.getAllHoroscopes = getAllHoroscopes;
exports.getHoroscopesByDate = getHoroscopesByDate;
exports.updateHoroscope = updateHoroscope;
const horoscopeService_1 = require("../services/horoscopeService");
// ✅ Create single horoscope
function createHoroscope(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const horoscope = yield horoscopeService_1.HoroscopeService.createHoroscope(req.body);
            if (horoscope) {
                res.status(200).json({ message: 'Submit successful', data: horoscope, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get single horoscope by ID
function getHoroscopeById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const horoscope = yield horoscopeService_1.HoroscopeService.getByIdHoroscope(req.params.id);
            if (horoscope) {
                res.status(200).json({ message: 'Find successful', data: horoscope, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Upload JSON for bulk insert
function uploadHoroscopes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.file)
                return res.status(400).json({ message: "Upload a JSON file", status: "fail", statusCode: 400 });
            const jsonData = JSON.parse(req.file.buffer.toString());
            const horoscope = yield horoscopeService_1.HoroscopeService.uploadHoroscopes(jsonData);
            if (horoscope) {
                res.status(200).json({ message: 'Horoscopes uploaded successfully', data: horoscope, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get all horoscopes
function getAllHoroscopes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const horoscopes = yield horoscopeService_1.HoroscopeService.getAllHoroscope();
            if (horoscopes) {
                res.status(200).json({ message: 'Horoscopes find successfully', data: horoscopes, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscopes });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Get horoscopes by date
function getHoroscopesByDate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dateParam = req.query.date;
            const date = typeof dateParam === "string" ? dateParam : new Date().toISOString().slice(0, 10);
            const horoscopes = yield horoscopeService_1.HoroscopeService.getHoroscopesByDate(date);
            if (horoscopes) {
                res.status(200).json({ message: 'Horoscopes find successfully', data: horoscopes, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscopes });
            }
        }
        catch (error) {
            console.error("Fetch By Date Error:", error);
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Update horoscope by ID
function updateHoroscope(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const horoscope = yield horoscopeService_1.HoroscopeService.updateHoroscope(req.params.id, req.body);
            if (!horoscope)
                return res.status(404).json({ message: "Horoscope not found", status: "failed", statusCode: 404 });
            if (horoscope) {
                res.status(200).json({ message: 'Horoscope update successful', data: horoscope, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
        }
    });
}
;
// ✅ Delete horoscope by ID
const deleteHoroscope = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const horoscope = yield horoscopeService_1.HoroscopeService.deleteHoroscope(req.params.id);
        if (!horoscope)
            return res.status(404).json({ message: "Horoscope not found", status: "failed", statusCode: 404 });
        if (horoscope) {
            res.status(200).json({ message: 'Horoscope deleted successfully', data: horoscope, status: "success", statusCode: 200 });
        }
        else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: horoscope });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', status: "fail", statusCode: 500, data: error });
    }
});
exports.deleteHoroscope = deleteHoroscope;
