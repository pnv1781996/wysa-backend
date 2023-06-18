import { Schema, model } from "mongoose";

const getNextPageSchema = new Schema(
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
export default model("initPage", getNextPageSchema);
