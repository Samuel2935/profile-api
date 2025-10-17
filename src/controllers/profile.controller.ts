import { Request, Response } from "express";
import { fetchCatFact } from "../services/catFact.service.js";
import { log } from "../utils/logger.js";

export const getProfile = async (_req: Request, res: Response) => {
  try {
    const fact = await fetchCatFact();

    const response = {
      status: "success",
      user: {
        email: process.env.USER_EMAIL || "samuelblessed38@gmail.com",
        name: process.env.USER_NAME || "Samuel Ezeh",
        stack: process.env.USER_STACK || "Node.js/Express + TypeScript"
      },
      timestamp: new Date().toISOString(),
      fact
    };

    // Express' res.json sets Content-Type: application/json
    res.status(200).json(response);
  } catch (err) {
    log(`Controller error: ${(err as Error).message}`);

    res.status(200).json({
      status: "success",
      user: {
        email: process.env.USER_EMAIL || "samuelblessed38@gmail.com",
        name: process.env.USER_NAME || "Samuel Ezeh",
        stack: process.env.USER_STACK || "Node.js/Express + TypeScript"
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at this time. Please try again later."
    });
  }
};
