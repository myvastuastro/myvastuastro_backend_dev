import { Router } from "express";
import {createMyVastuAstro,getAllMyVastuAstros, getMyVastuAstro, updateMyVastuAstro, deleteMyVastuAstro} from "../controllers/myVastuAstroController";
const router = Router();
router.post("/", createMyVastuAstro);
router.get("/", getAllMyVastuAstros);
router.get("/:id", getMyVastuAstro);
router.put("/:id", updateMyVastuAstro);
router.delete("/:id", deleteMyVastuAstro);
export default router;
