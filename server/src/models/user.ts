import { model, Schema, Types } from "mongoose";

export interface UserSchema {
    _id?: Types.ObjectId;
    name: string;
    lastname: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserSchema>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false, bcrypt: true },
});

const UserModel = model("User", userSchema);

export const createUser = async (user: UserSchema) => {
    const newUser = new UserModel(user);
    return await newUser.save();
};

export const findUserByEmail = async (email: UserSchema["email"]) => {
    const user = await UserModel.findOne({ email });
    return user;
};

export const findUserByEmailAndPassword = async (
    email: UserSchema["email"],
    password: UserSchema["password"],
) => {
    const user = await UserModel.findOne({ email, password });
    return user;
};

export const findUserBySessionID = async (sessionID: Types.ObjectId) => {
    const user = await UserModel.findById(sessionID);
    return user;
};
