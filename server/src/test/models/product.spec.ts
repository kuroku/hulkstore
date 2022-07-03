import {
    createProduct,
    getProducts,
    ProductSchema,
} from "../../models/product";
import { dbDrop } from "../../models";
import { dbConnect } from "../../models";
import { createUser } from "../../models/user";
import { UserSchema } from "../../models/user";

beforeAll(async () => {
    await dbConnect();
});

afterAll(async () => {
    await dbDrop();
});

describe("Model product", () => {
    const userSchema: UserSchema = {
        name: "robert",
        lastname: "montilla",
        email: "test@gmail.com",
        password: "test",
    };
    it("should create a new product", async () => {
        const user = await createUser(userSchema);
        const product: ProductSchema = {
            name: "nike",
            category: "shoes",
            price: 10,
            description: "test",
            image: "test",
            owner: user._id,
            onSale: true,
        };
        await createProduct(product);
    });
    it("should find all products", async () => {
        await getProducts();
    });
});
