import { dbConnect } from ".";
import { insertProductMany } from "./product";
import productSeeds from "./products.seed";
import { createUser, UserSchema } from "./user";

async function startSedd() {
    dbConnect();

    const userMasterSchema: UserSchema = {
        name: "robert",
        lastname: "montilla",
        email: "master@gmail.com",
        password: "test",
    };

    const userMaster = await createUser(userMasterSchema);
    await insertProductMany(productSeeds(userMaster._id));
    console.log("seed run successfully");
    process.exit(0);
}

startSedd();
