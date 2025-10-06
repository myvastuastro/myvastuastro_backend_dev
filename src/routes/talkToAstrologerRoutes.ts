import { Router } from "express";
import { upload } from "../middleware/uploadMiddleware";
import {
  createTalkToAstrologer,
  getTalkToAstrologerAll,
  getTalkToAstrologerById,
  deleteTalkToAstrologer,
  updateTalkToAstrologer,
  toggleService,
  setOnlineStatus,
  updateSchedule,
  addReview,
  getReviews
} from "../controllers/talkToAstrologerController";
const router = Router();
router.post("/", upload.single("file"), createTalkToAstrologer);
router.get("/", getTalkToAstrologerAll);
router.get("/:id", getTalkToAstrologerById);
router.delete("/:id", deleteTalkToAstrologer);
router.put("/:id", updateTalkToAstrologer);
router.patch("/:id/toggle-service", toggleService);
router.patch("/:id/online-status", setOnlineStatus);
router.patch("/:id/schedule-service", updateSchedule);
router.post("/:astrologerId/reviews", addReview);
router.get("/:astrologerId/reviews", getReviews);

export default router;