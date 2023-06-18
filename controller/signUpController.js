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
      message: "User already signed up with the same name",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await signUpModel.create({
      name,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully" });
  }
});
