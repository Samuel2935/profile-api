import request from "supertest";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  profileRouter from "../routes/profile.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/me", profileRouter);

describe("GET /me endpoint", () => {
  it("should return 200 and follow the correct JSON structure", async () => {
    const res = await request(app).get("/me");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/application\/json/);

    const body = res.body;
    expect(body.status).toBe("success");

    // Validate user object
    expect(body.user).toHaveProperty("email");
    expect(typeof body.user.email).toBe("string");
    expect(body.user).toHaveProperty("name");
    expect(typeof body.user.name).toBe("string");
    expect(body.user).toHaveProperty("stack");
    expect(typeof body.user.stack).toBe("string");

    // Validate timestamp is ISO 8601 UTC
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    expect(body.timestamp).toMatch(isoRegex);

    // Validate cat fact exists
    expect(body).toHaveProperty("fact");
    expect(typeof body.fact).toBe("string");
  });

  it("should return a new timestamp on each request", async () => {
    const first = await request(app).get("/me");
    const second = await request(app).get("/me");
    expect(first.body.timestamp).not.toBe(second.body.timestamp);
  });
});
