"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vastuTipController_1 = require("../controllers/vastuTipController");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const router = express_1.default.Router();
router.post('/create', uploadMiddleware_1.upload.fields([
    { name: 'file', maxCount: 1 }, // for image or main file
    { name: 'audio', maxCount: 1 }, // for audio file
]), vastuTipController_1.uploadVastuTipController);
router.get('/all', vastuTipController_1.getVastuTipsController);
router.put('/update/:id', uploadMiddleware_1.upload.fields([
    { name: 'file', maxCount: 1 }, // for image or main file
    { name: 'audio', maxCount: 1 }, // for audio file
]), vastuTipController_1.updateVastuTipsController);
router.get('/:id', vastuTipController_1.getVastuTipsControllerById);
router.delete('/:id', vastuTipController_1.deleteVastuTipsController);
exports.default = router;
