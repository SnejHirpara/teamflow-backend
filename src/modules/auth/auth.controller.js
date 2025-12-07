import * as userService from "../user/user.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

export const signUp = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
        throw new ApiError(400, "Missing name, email or password field(s)");
    }

    try {
        const existingUser = await userService.getUserIdByEmail(email);
        if (existingUser) {
            throw new ApiError(400, "User already exists.");
        }

        const user = await userService.createUser({ name, email, password });
        return res
            .status(201)
            .json(new ApiResponse(201, { user }, "User created successfully."));
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while signing up new user.",
            error
        );
    }
});
