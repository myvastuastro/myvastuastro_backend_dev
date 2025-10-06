"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const horoscopeController_1 = require("../controllers/horoscopeController");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
// CRUD APIs
router.post("/", horoscopeController_1.createHoroscope); // Create single horoscope
router.post("/upload", upload.single("file"), horoscopeController_1.uploadHoroscopes); // Bulk JSON upload
router.get("/", horoscopeController_1.getAllHoroscopes); // Get all horoscopes
router.get("/by-date", horoscopeController_1.getHoroscopesByDate); // Get horoscopes by date
router.get("/:id", horoscopeController_1.getHoroscopeById); // Get horoscope by ID
router.put("/:id", horoscopeController_1.updateHoroscope); // Update by ID
router.delete("/:id", horoscopeController_1.deleteHoroscope); //delete horoscope
exports.default = router;
