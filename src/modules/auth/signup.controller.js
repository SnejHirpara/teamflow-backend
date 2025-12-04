import * as userService from "./user.service.js";
import asyncHandler from "../../utils/asyncHandler.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing name, email or password field(s)",
    });
  }

  try {
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }

    const user = await userService.createUser({ name, email, password });
    return res.status(201).json({
      success: true,
      data: { user },
      message: "User created successfully.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
});
