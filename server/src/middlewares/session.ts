import { NextFunction, Request, Response } from "express";
import { findUserBySessionID, UserSchema } from "../models/user";
import { jwtDecode } from "../utils/jwt";

export interface RequestSession extends Request {
    userSession: UserSchema;
}

export default async function sessionMiddleware(
    req: RequestSession,
    res: Response,
    next: NextFunction,
) {
    const { token } = req.cookies;
    if (!token) {
        return res.status(400).send("token is required");
    }

    const sessionID = jwtDecode(token);
    if (!sessionID) {
        return res.status(401).send("token is invalid");
    }
    const user = await findUserBySessionID(sessionID);
    if (!user) {
        return res.status(404).send("user not found");
    }
    req.userSession = user;
    next();
}
