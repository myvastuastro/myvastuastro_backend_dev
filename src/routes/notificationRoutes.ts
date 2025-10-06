import { Router } from "express";
import {createNotification,getAllNotifications,deleteNotification,updateNotification, getNotification} from "../controllers/notificationController";
const router = Router();


router.post("/", createNotification);
router.get("/", getAllNotifications);
router.get("/:id", getNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);
export default router;
