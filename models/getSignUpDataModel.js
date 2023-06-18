import { Schema, model } from "mongoose";

const signUpSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Signup", signUpSchema);
