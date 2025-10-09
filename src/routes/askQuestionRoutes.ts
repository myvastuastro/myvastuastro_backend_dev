import { Router } from "express";
import {createAskQuestion,getAllAskQuestions, getAskQuestion, updateAskQuestion, deleteAskQuestion, answerQuestionVastu} from "../controllers/askQuestionController";
const router = Router();
router.post("/", createAskQuestion);
router.get("/", getAllAskQuestions);
router.get("/:userId", getAskQuestion);
router.put("/:id", updateAskQuestion);
router.delete("/:id", deleteAskQuestion);
router.put("/:id/answer", answerQuestionVastu);

export default router;
