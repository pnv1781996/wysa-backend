import asyncHandler from "express-async-handler";
import signUpModel from "../models/getSignUpDataModel.js";
import bcrypt from "bcrypt";

export const createSignUp = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(400);
    throw new Error("Name and password is required");
  }
  // Check if user with the same name already exists
  const existingUser = await signUpModel.findOne({ name });
  if (existingUser) {
    res.status(409).json({
      title: "Name Conflict",
      message: "Name already exists",
    });
  }

  res.status(201).json({ success: true, message: "User created successfully" });
});
