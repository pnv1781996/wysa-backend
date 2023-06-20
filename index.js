import express, { json } from "express";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import nextPageRoutes from "./routes/nextPageRoutes.js";
import assessmentRoutes from "./routes/assessmentRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { tokenMiddleware } from "./middleware/tokenMiddleware.js";
dotenv.config();

connectDb();
const app = express();
app.use(json());
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(tokenMiddleware);

app.use("/api/pages", nextPageRoutes);
app.use("/api/user", userRoutes);
app.use("/api/submit", assessmentRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

import functions from "firebase-functions";
import logger from "firebase-functions/logger";
export const appV1 = functions
  // Choose a region other than the default us-central1
  .region("asia-south1")
  // Increased memory, decreased timeout (compared to defaults)
  .runWith({ memory: "2GB", timeoutSeconds: 30 })
  .https.onRequest(app);

// export default app;
// token exists
// yes -> user is authenticated and asking for next screens after signup
// no -> Check if api is get(match  url) and req.query.currentScreen = null
