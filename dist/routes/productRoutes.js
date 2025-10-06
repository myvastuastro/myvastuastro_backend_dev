"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const selfProductController_1 = require("../controllers/selfProductController");
const router = express_1.default.Router();
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
router.post('/upload', uploadMiddleware_1.upload.single("file"), selfProductController_1.uploadSelfProductController);
router.get('/all', selfProductController_1.getAllSelfProductsController);
router.get('/:userId', selfProductController_1.getSelfProductsController);
router.get('/getById/:id', selfProductController_1.getSelfProductsControllerById);
router.put('/update/:id', uploadMiddleware_1.upload.single("file"), selfProductController_1.updateSelfProductsController);
router.delete('/:id', selfProductController_1.deleteSelfProductsControllerById);
exports.default = router;
