import { Router } from "express";
import {createToken,getAllTokens, getToken, updateToken, deleteToken} from "../controllers/tokenController";
const router = Router();


router.post("/", createToken);
router.get("/", getAllTokens);
router.get("/:id", getToken);
router.put("/:id", updateToken);
router.delete("/:id", deleteToken);
export default router;
