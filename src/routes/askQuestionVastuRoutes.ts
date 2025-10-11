import { Router } from "express";
import {createAskQuestionVastu,getAllAskQuestionsVastu, getAskQuestionByUserIdVastu, updateAskQuestionVastu, deleteAskQuestionVastu, answerQuestionVastu} from "../controllers/askQuestionVastuController";
const router = Router();
router.post("/", createAskQuestionVastu);
router.get("/", getAllAskQuestionsVastu);
router.get("/:userId", getAskQuestionByUserIdVastu);
router.put("/:id", updateAskQuestionVastu);
router.delete("/:id", deleteAskQuestionVastu);
router.put("/:id/answer", answerQuestionVastu);

export default router;
