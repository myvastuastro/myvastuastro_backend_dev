"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kundliController_1 = require("../controllers/kundliController");
const router = (0, express_1.Router)();
router.post("/", kundliController_1.createKundli); // Create
router.get("/", kundliController_1.getAllKundlis); // List (paginated)
router.get("/:id", kundliController_1.getKundliById); // Get by ID
exports.default = router;
