import multer from "multer";
import { Router } from "express";
import {
  createHoroscope,
  uploadHoroscopes,
  getAllHoroscopes,
  getHoroscopesByDate,
  getHoroscopeById,
  updateHoroscope,
  deleteHoroscope
} from "../controllers/horoscopeController";
const router = Router();
const upload = multer();
// CRUD APIs
router.post("/", createHoroscope);                // Create single horoscope
router.post("/upload", upload.single("file"), uploadHoroscopes); // Bulk JSON upload
router.get("/", getAllHoroscopes);                // Get all horoscopes
router.get("/by-date", getHoroscopesByDate);      // Get horoscopes by date
router.get("/:id", getHoroscopeById);             // Get horoscope by ID
router.put("/:id", updateHoroscope);              // Update by ID
router.delete("/:id", deleteHoroscope);           //delete horoscope
export default router;
