import { json, Router } from "express";
import productRoute from "./product";
import userRouter from "./user";
import cookieParser from "cookie-parser";

export const router = Router();

router
    .use(cookieParser())
    .use(json())
    .use("/user", userRouter)
    .use("/product", productRoute);
