import express from "express";
import { signUp } from "./signup.controller.js";

const router = express.Router();

router.post("/signup", signUp);

export default router;
