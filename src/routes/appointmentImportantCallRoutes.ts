import { Router } from "express";
import {createAppointmentImportantCall,getAllAppointmentsImportantCall, getAppointmentImportantCall, updateAppointmentImportantCall, deleteAppointmentImportantCall} from "../controllers/appointmentImportantCallController";
const router = Router();
router.post("/importantCall/",  createAppointmentImportantCall);
router.get("/importantCall", getAllAppointmentsImportantCall);
router.get("/importantCall/:id", getAppointmentImportantCall);
router.put("/importantCall/:id", updateAppointmentImportantCall);
router.delete("/importantCall/:id", deleteAppointmentImportantCall);
export default router;
