import { Router } from "express";
import { getCart, addCart,removeCart,updateQuantity, clearCart } from "../../controllers/controllers/cartController";

const router = Router();
router.get("/:userId", getCart);
router.post("/add", addCart);
router.post("/remove", removeCart);
router.post("/update-quantity", updateQuantity);
router.post("/clear", clearCart);
export default router;