/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import functions from "firebase-functions";
import logger from "firebase-functions/logger";
import app_main from "../index.js";
export const app = functions
  // Choose a region other than the default us-central1
  .region("asia-south1")
  // Increased memory, decreased timeout (compared to defaults)
  .runWith({ memory: "2GB", timeoutSeconds: 30 })
  .https.onRequest(app_main);
