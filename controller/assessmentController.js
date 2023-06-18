import asyncHandler from "express-async-handler";
import getAssessmentSchema from "../models/getAssessmentDataModel.js";

export const createAssessment = asyncHandler(async (req, res) => {
  const data = req.body;
  if (!Array.isArray(data) || data.length === 0) {
    res.status(400);
    throw new Error("Data is required and should be a non-empty array");
  }

  const newAssessment = await getAssessmentSchema.create({ data });

  res.status(201).json({
    success: true,
    message: "Submit the data successfully",
  });
});
