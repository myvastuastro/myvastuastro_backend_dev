import { Router } from "express";
import {
  createAddress,
  getAllAddresss,
  getAddressById,
  deleteAddress,
  updateAddress,
  getAddressByUserId
} from "../../controllers/controllers/addressController";

const router = Router();
router.post("/", createAddress);
router.get("/", getAllAddresss);
router.get("/:id", getAddressById);
router.get("/user/:userId", getAddressByUserId);
router.delete("/:id", deleteAddress);
router.put("/:id", updateAddress);
export default router;