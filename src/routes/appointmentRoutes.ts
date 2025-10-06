import { Router } from "express";
import {createAppointment,getAllAppointments, getAppointment, updateAppointment, deleteAppointment} from "../controllers/appointmentController";
const router = Router();


router.post("/",  createAppointment);
router.get("/", getAllAppointments);
router.get("/:id", getAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);
export default router;
