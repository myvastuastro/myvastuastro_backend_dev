import { Router } from "express";
import { upload } from "../../middleware/uploadMiddleware";
import {
  createParent,
  getParentAll,
  getParentById,
  deleteParent,
  updateParent,
  getParentByUserId
} from "../../controllers/controllers/parentController";

const router = Router();
router.post("/", upload.single("file"), createParent);
router.get("/", getParentAll);
router.get("/:id", getParentById);
router.get("/user/:userId", getParentByUserId);
router.delete("/:id", deleteParent);
router.put("/:id", updateParent);
export default router;