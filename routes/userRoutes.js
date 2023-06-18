import { Router } from "express";
import { createSignUp } from "../controller/signUpController.js";
import { payloadMiddleware } from "../middleware/payloadMiddleware.js";
const router = Router();

router.post("/signup", payloadMiddleware, createSignUp);
export default router;
