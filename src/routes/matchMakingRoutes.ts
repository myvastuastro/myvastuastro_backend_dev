import { Router } from "express";
import {
  createMatch,
  getAllMatchs,
  getMatchById,
  updateMatch,
  deleteMatch,
} from "../controllers/matchController";

const router = Router();

router.post("/", createMatch);                     // Create
router.get("/", getAllMatchs);                     // List (paginated)
router.get("/:id", getMatchById);                  // Get by ID
router.put("/:id", updateMatch);                   // Update by ID
router.delete("/:id", deleteMatch);                // Delete by ID

export default router;
