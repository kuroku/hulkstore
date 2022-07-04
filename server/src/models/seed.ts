import { dbConnect } from ".";
import { insertProductMany } from "./product";
import productSeeds from "./products.seed";
import { createUser, UserSchema } from "./user";

async function startSedd() {
    dbConnect();

    const userMasterSchema: UserSchema = {
        name: "hulk",
        lastname: "store",
        email: "hulkstore_master@gmail.com",
        password: "hulkstore",
    };

    const userMaster = await createUser(userMasterSchema);
    await insertProductMany(productSeeds(userMaster._id));
    console.log("seed run successfully");
    process.exit(0);
}

startSedd();
