import { Router } from "express";
import {
  createKundli,
  getAllKundlis,
  getKundliById
} from "../controllers/kundliController";

const router = Router();

router.post("/", createKundli);                     // Create
router.get("/", getAllKundlis);                     // List (paginated)
router.get("/:id", getKundliById);                  // Get by ID

export default router;
