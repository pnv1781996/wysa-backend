import { Schema, model } from "mongoose";

const getAssessmentSchema = new Schema(
  {
    data: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default model("submitAssessment", getAssessmentSchema);
