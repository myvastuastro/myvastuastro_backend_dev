import { Router } from "express";
import { upload } from "../../middleware/uploadMiddleware";
import {
  createProduct,
  getProductAll,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductByUserId
} from "../../controllers/controllers/productController";

const router = Router();
router.post("/", upload.single("file"), createProduct);
router.get("/", getProductAll);
router.get("/:id", getProductById);
router.get("/user/:userId", getProductByUserId);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
export default router;