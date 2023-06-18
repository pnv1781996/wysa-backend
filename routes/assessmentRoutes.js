import { Router } from "express";
import { createAssessment } from "../controller/assessmentController.js";
import { payloadMiddleware } from "../middleware/payloadMiddleware.js";
const router = Router();

router.post("/assessment", payloadMiddleware, createAssessment);
export default router;
