import { Router } from "express";
import { body, validationResult } from "express-validator";
import { jwtEncode } from "../utils/jwt";
import {
    createUser,
    findUserByEmailAndPassword,
    UserSchema,
} from "../models/user";
import { UserAuthResponse } from "../../types/response";

const userRouter = Router();

userRouter.post(
    "/register",
    body("name").isString().withMessage("name is required"),
    body("lastname").isString().withMessage("lastname is required"),
    body("email").isEmail().withMessage("email is invalid"),
    body("password").isString().withMessage("password is required"),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.array());
        }
        const userSchema: UserSchema = req.body;
        const user = await createUser(userSchema);
        const token = jwtEncode(user._id);
        const response: UserAuthResponse = {
            user,
            token,
        };
        res.status(201).cookie("token", token).json(response);
    },
);

userRouter.post(
    "/login",
    body("email").isEmail().withMessage("email is invalid"),
    body("password").isString().withMessage("password is invalid"),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.array());
        }
        const { email, password } = req.body;
        const user = await findUserByEmailAndPassword(email, password);
        if (!user) {
            return res.status(401).send("Invalid email or password");
        }
        const token = jwtEncode(user._id);
        const response: UserAuthResponse = {
            user,
            token,
        };
        res.status(200).cookie("token", token).send(response);
    },
);

export default userRouter;
