"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchController_1 = require("../controllers/matchController");
const router = (0, express_1.Router)();
router.post("/", matchController_1.createMatch); // Create
router.get("/", matchController_1.getAllMatchs); // List (paginated)
router.get("/:id", matchController_1.getMatchById); // Get by ID
router.put("/:id", matchController_1.updateMatch); // Update by ID
router.delete("/:id", matchController_1.deleteMatch); // Delete by ID
exports.default = router;
