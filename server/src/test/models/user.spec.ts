import {} from "assert";
import { dbConnect, dbDrop } from "../../models";
import {
    createUser,
    findUserByEmail,
    findUserByEmailAndPassword,
    UserSchema,
} from "../../models/user";

beforeAll(async () => {
    await dbConnect();
});

afterAll(async () => {
    await dbDrop();
});

describe("Model user", () => {
    const userSchema: UserSchema = {
        name: "robert",
        lastname: "montilla",
        email: "test@gmail.com",
        password: "test",
    };
    it("should create a new user", async () => {
        await createUser(userSchema);
    });
    it("should find user by email", async () => {
        const user = await findUserByEmail(userSchema.email);
        if (!user) {
            throw new Error("User not found");
        }
    });
    it("should find user by email and password", async () => {
        const user = await findUserByEmailAndPassword(
            userSchema.email,
            userSchema.password,
        );
        if (!user) {
            throw new Error("User not found");
        }
    });
});
