import { model, Schema, Types } from "mongoose";

export type Category = "shoes" | "clothes" | "accessories";

export interface ProductSchema {
    name: string;
    category: Category;
    price: number;
    description: string;
    image: string;
    owner: Types.ObjectId;
    oldOwners?: Schema.Types.ObjectId[];
    onSale: boolean;
}

const productSchema = new Schema<ProductSchema>({
    name: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ["shoes", "clothes", "accessories"],
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    oldOwners: [{ type: Schema.Types.ObjectId, ref: "User" }],
    onSale: { type: Boolean, required: true },
});

const ProductModel = model("Product", productSchema);

export const createProduct = async (product: ProductSchema) => {
    const newProduct = new ProductModel(product);
    return await newProduct.save();
};

export const getProducts = async () => {
    const products = await ProductModel.find({ onSale: true })
        .populate("owner", "name lastname email")
        .exec();
    return products;
};

export const insertProductMany = async (productSchemas: ProductSchema[]) => {
    const products = await ProductModel.insertMany(productSchemas);
    return products;
};
