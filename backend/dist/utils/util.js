"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = void 0;
const dotenv_1 = require("dotenv");
const node_buffer_1 = require("node:buffer");
(0, dotenv_1.config)();
const API_BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_ID}/ai/run/`;
const headers = {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/x-www-form-urlencoded",
};
// async function binaryStringToBase64(binaryString: string): Promise<string> {
//   const buffer = await new TextEncoder().encode(binaryString);
//   return buffer.toString("base64");
// }
async function run(model, prompt) {
    const input = { prompt };
    try {
        const response = await fetch(`${API_BASE_URL}${model}`, {
            method: "POST",
            headers,
            body: JSON.stringify(input),
        });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.blob();
        return data;
    }
    catch (error) {
        console.error("Error running model:", error);
        throw error; // Or handle the error differently
    }
}
const inputs = [
    "You are a friendly assistant that helps write stories",
    "Generate an anime carrot image",
];
function convertArrayBufferToBase64(arrayBuffer) {
    // Convert ArrayBuffer to Buffer
    const buffer = node_buffer_1.Buffer.from(arrayBuffer);
    return buffer.toString("base64");
}
async function getImage(prompt) {
    try {
        const output = await run("@cf/lykon/dreamshaper-8-lcm", prompt);
        return convertArrayBufferToBase64(await output.arrayBuffer());
    }
    catch (error) {
        console.error("Error generating story:", error);
    }
}
exports.getImage = getImage;
