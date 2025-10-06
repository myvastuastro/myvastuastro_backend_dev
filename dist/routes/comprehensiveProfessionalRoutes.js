"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comprehensiveProfessionalController_1 = require("../controllers/comprehensiveProfessionalController");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const router = express_1.default.Router();
router.post('/upload', uploadMiddleware_1.upload.single("file"), comprehensiveProfessionalController_1.uploadComprehensiveProfessionalController);
router.get('/all', comprehensiveProfessionalController_1.getComprehensiveProfessionalsController);
router.put('/update/:id', uploadMiddleware_1.upload.single("file"), comprehensiveProfessionalController_1.updateComprehensiveProfessionalsController);
router.get('/getByUserId/:userId', comprehensiveProfessionalController_1.getComprehensiveProfessionalsByUserId);
router.get('/getById/:id', comprehensiveProfessionalController_1.getComprehensiveProfessionalsById);
exports.default = router;
