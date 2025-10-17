import { Router } from "express";
import { getProfile } from "../controllers/profile.controller.js";

const router = Router();

// GET /me
router.get("/", getProfile);

export default router;
