import { Router } from "express";
import { upload } from "../middleware/uploadMiddleware";
import {
  createAskQuestionAstro,
  getAskQuestionAstroAll,
  getAskQuestionAstroById,
  answerQuestionAstro,
  deleteAskQuestionAstro,
  updateAskQuestionAstro,
  getAskQuestionAstroByUserId
} from "../controllers/askQuestionAstroController";

const router = Router();

// ✅ Use Cloudinary upload middleware
router.post("/", upload.single("file"), createAskQuestionAstro);
router.get("/", getAskQuestionAstroAll);
router.get("/:id", getAskQuestionAstroById);
router.get("/user/:userId", getAskQuestionAstroByUserId);
router.put("/:id/answer", answerQuestionAstro);
router.delete("/:id", deleteAskQuestionAstro);
router.put("/:id", updateAskQuestionAstro);
export default router;