import Mongoose from "mongoose";

const {
    MONGODB_URI = "mongodb://localhost:27017/hulkstore",
    MONGODB_URI_TEST = "mongodb://localhost:27017/test",
    NODE_ENV,
} = process.env;

export async function dbConnect() {
    const url = NODE_ENV === "test" ? MONGODB_URI_TEST : MONGODB_URI;
    await Mongoose.connect(url);
}

export async function dbDrop() {
    const url = MONGODB_URI_TEST;
    const db = await Mongoose.connect(url);
    await db.connection.db.dropDatabase();
}
