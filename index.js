import express, { json } from "express";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import nextPageRoutes from "./routes/nextPageRoutes.js";
import assessmentRoutes from "./routes/assessmentRoutes.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

connectDb();
const app = express();
app.use(json());
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use("/api/pages", nextPageRoutes);
app.use("/api/user", userRoutes);
app.use("/api/submit", assessmentRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
