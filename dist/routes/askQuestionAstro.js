"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const askQuestionAstroController_1 = require("../controllers/askQuestionAstroController");
const router = (0, express_1.Router)();
// ✅ Use Cloudinary upload middleware
router.post("/", uploadMiddleware_1.upload.single("image"), askQuestionAstroController_1.createAskQuestionAstro);
router.get("/", askQuestionAstroController_1.getAskQuestionAstroAll);
router.get("/:id", askQuestionAstroController_1.getAskQuestionAstroById);
// router.put("/:id/answer", answerAstroQuestion);
router.delete("/:id", askQuestionAstroController_1.deleteAskQuestionAstro);
router.delete("/:id", askQuestionAstroController_1.updateAskQuestionAstro);
exports.default = router;
