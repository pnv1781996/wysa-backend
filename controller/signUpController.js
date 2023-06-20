import asyncHandler from "express-async-handler";
import signUpModel from "../models/getSignUpDataModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createSignUp = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(400).send({
      message: "Name and password is required",
    });
  }
  // Check if user with the same name already exists
  const existingUser = await signUpModel.findOne({ name });
  if (existingUser) {
    return res.status(409).json({
      message: "User already signed up with the same name",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await signUpModel.create({
    name,
    password: hashedPassword,
  });
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      { userId: newUser._id, name: newUser.name },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    // const error = new Error("Error! Something went wrong.");
  }

  return res
    .status(201)
    .json({ message: "User created successfully", token: token });
});
