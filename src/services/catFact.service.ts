import axios from "axios";
import { log } from "../utils/logger.js";

const API_URL = process.env.CAT_FACT_API || "https://catfact.ninja/fact";
const TIMEOUT_MS = 5000;

export const fetchCatFact = async (): Promise<string> => {
  try {
    const resp = await axios.get(API_URL, { timeout: TIMEOUT_MS });
    const fact = resp.data?.fact;
    if (!fact || typeof fact !== "string") {
      log("Cat fact missing in response, returning fallback.");
      return "Cats are mysterious and fascinating creatures.";
    }
    return fact;
  } catch (error) {
    log(`CatFact API error: ${(error as Error).message}`);
    return "Could not fetch cat fact due to network issues.";
  }
};
