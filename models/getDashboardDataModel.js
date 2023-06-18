import { Schema, model } from "mongoose";

const getDashboardSchema = new Schema(
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
export default model("dashboard", getDashboardSchema);
