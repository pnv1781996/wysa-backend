import { Schema, model } from "mongoose";

const getQuestionSchema = new Schema(
  {
    screen: {
      type: String,
    },
    data: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Question", getQuestionSchema);
