import { config } from "dotenv";
import { Buffer } from "buffer";
import axios from "axios";

config();
const API_BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_ID}/ai/run/`;

const headers = {
  Authorization: `Bearer ${process.env.API_KEY}`,
  "Content-Type": "application/json",
};

async function run(model: string, prompt: string): Promise<any> {
  const input = { prompt };
  try {
    const response = await axios.post(`${API_BASE_URL}${model}`, input, {
      headers: headers,
      responseType: "arraybuffer",
    });

    return response.data;
  } catch (error) {
    console.error("Error running model:", error);
    throw error;
  }
}

function convertArrayBufferToBase64(arrayBuffer: ArrayBuffer) {
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString("base64");
}

export async function getImage(prompt: string) {
  try {
    const output = await run("@cf/bytedance/stable-diffusion-xl-lightning", prompt);
    return convertArrayBufferToBase64(output);
  } catch (error) {
    console.error("Error generating story:", error);
  }
}
