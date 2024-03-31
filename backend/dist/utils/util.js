"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = void 0;
const dotenv_1 = require("dotenv");
const buffer_1 = require("buffer");
const axios_1 = __importDefault(require("axios"));
(0, dotenv_1.config)();
const API_BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_ID}/ai/run/`;
const headers = {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json",
};
async function run(model, prompt) {
    const input = { prompt };
    try {
        const response = await axios_1.default.post(`${API_BASE_URL}${model}`, input, {
            headers: headers,
            responseType: "arraybuffer",
        });
        return response.data;
    }
    catch (error) {
        console.error("Error running model:", error);
        throw error;
    }
}
function convertArrayBufferToBase64(arrayBuffer) {
    const buffer = buffer_1.Buffer.from(arrayBuffer);
    return buffer.toString("base64");
}
async function getImage(prompt) {
    try {
        const output = await run("@cf/bytedance/stable-diffusion-xl-lightning", prompt);
        return convertArrayBufferToBase64(output);
    }
    catch (error) {
        console.error("Error generating story:", error);
    }
}
exports.getImage = getImage;
