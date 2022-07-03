import { Router } from "express";
import { body, validationResult } from "express-validator";
import sessionMiddleware, { RequestSession } from "../middlewares/session";
import { createProduct, getProducts, ProductSchema } from "../models/product";

const productRoute = Router();

productRoute.get("/", async (_, res) => {
    const products = await getProducts();
    res.status(200).send(products);
});

productRoute.post(
    "/",
    sessionMiddleware,
    body("name").isString(),
    body("price").isNumeric(),
    body("description").isString(),
    body("category").isString(),
    body("image").isBase64(),
    async (req: RequestSession, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.array());
        }
        const { userSession } = req;
        const { name, price, description, category, image } = req.body;
        const productSchema: ProductSchema = {
            name,
            price,
            description,
            category,
            image,
            owner: userSession._id,
            onSale: true,
        };
        const product = await createProduct(productSchema);
        res.status(201).send({ product });
    },
);

export default productRoute;
