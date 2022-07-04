import { UserSchema } from "models/user";
import { ProductSchema } from "../src/models/product";

export type GetProductsResponse = ProductSchema[];
export interface UserAuthResponse {
    user: UserSchema;
    token: string;
}
