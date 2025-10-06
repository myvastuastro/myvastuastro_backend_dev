"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const askQuestionAstroController_1 = require("../controllers/askQuestionAstroController");
const router = (0, express_1.Router)();
// ✅ Use Cloudinary upload middleware
router.post("/", uploadMiddleware_1.upload.single("file"), askQuestionAstroController_1.createAskQuestionAstro);
router.get("/", askQuestionAstroController_1.getAskQuestionAstroAll);
router.get("/:id", askQuestionAstroController_1.getAskQuestionAstroById);
router.get("/user/:userId", askQuestionAstroController_1.getAskQuestionAstroByUserId);
router.put("/:id/answer", askQuestionAstroController_1.answerQuestionAstro);
router.delete("/:id", askQuestionAstroController_1.deleteAskQuestionAstro);
router.put("/:id", askQuestionAstroController_1.updateAskQuestionAstro);
exports.default = router;
