import { Router } from "express";
import {
  checkout,
  getUserOrders,
  getOrderById,
  updateOrderStatus
} from "../../controllers/controllers/orderController";

const router = Router();
router.post("/checkout", checkout)
router.get("/user/:userId", getUserOrders);
router.get("/:id", getOrderById);
router.put("/:id/status", updateOrderStatus);
export default router;