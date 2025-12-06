import * as userService from "../user/user.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res
      .status(400)
      .json(new ApiError(400, "Missing name, email or password field(s)"));
  }

  try {
    const existingUser = await userService.getUserIdByEmail(email);
    if (existingUser) {
      return res.status(400).json(new ApiError(400, "User already exists."));
    }

    const user = await userService.createUser({ name, email, password });
    return res
      .status(201)
      .json(new ApiResponse(201, { user }, "User created successfully."));
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          "Something went wrong while signing up new user.",
          error
        )
      );
  }
});
