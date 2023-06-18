import { Router } from "express";
import { getNextPage } from "../controller/nextPageController.js";
import { payloadMiddleware } from "../middleware/payloadMiddleware.js";
const router = Router();

router.get("/nextPageRedirect", payloadMiddleware, getNextPage);
export default router;
