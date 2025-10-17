import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import profileRouter from "./routes/profile.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// route mounted at /me
app.use("/me", profileRouter);

// health
app.get("/", (_req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
