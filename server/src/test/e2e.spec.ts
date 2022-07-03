import { UserSchema } from "../models/user";
import request from "supertest";
import { app } from "../app";
import { dbConnect, dbDrop } from "../models";

const prefix = "/api/v1";

beforeAll(async () => {
    await dbConnect();
});

afterAll(async () => {
    await dbDrop();
});

const user: UserSchema = {
    name: "robert",
    lastname: "montilla",
    email: "testmail@gmail.ccom",
    password: "test",
};

describe(`POST ${prefix}/user/register`, () => {
    it("should return 201 OK", done => {
        return request(app)
            .post(`${prefix}/user/register`)
            .expect("Content-Type", /json/)
            .send(user)
            .set("Accept", "application/json")
            .expect(201)
            .then(() => {
                done();
            })
            .catch(err => done(err));
    });
});

describe(`POST ${prefix}/user/login`, () => {
    it("should return 200 OK", () => {
        return request(app)
            .post(`${prefix}/user/login`)
            .send({ email: user.email, password: user.password })
            .set("Accept", "application/json")
            .expect(200);
    });
});

describe(`GET ${prefix}/product`, () => {
    it("should return 200 OK", () => {
        return request(app).get(`${prefix}/product`).expect(200);
    });
});
