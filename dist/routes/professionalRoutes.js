"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const professionalController_1 = require("../controllers/professionalController");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const router = express_1.default.Router();
router.post('/upload', uploadMiddleware_1.upload.single("file"), professionalController_1.uploadProfessionalController);
router.get('/all', professionalController_1.getProfessionalsController);
router.put('/update/:id', uploadMiddleware_1.upload.single("file"), professionalController_1.updateProfessionalsController);
router.get('/:userId', professionalController_1.getProfessionalsByUserId);
router.get('/getData/:id', professionalController_1.getProfessionalsById);
router.delete('/:id', professionalController_1.deleteProfessionalsById);
exports.default = router;
