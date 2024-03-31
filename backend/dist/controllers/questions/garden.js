"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gardenQuery = void 0;
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
const schema_1 = require("../../schemas/schema");
const generative_ai_1 = require("@google/generative-ai");
// For text-only input, use the gemini-pro model
dotenv_1.default.config();
async function gardenQuery(req, res) {
    try {
        const { option } = schema_1.GardenQuerySchema.parse(req.body);
        console.log(process.env.API_KEY);
        const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "Hello there!";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        return res.send("Actually worked!");
    }
    catch (e) {
        if (e instanceof zod_1.ZodError) {
            res.send(e);
            return;
        }
        console.error(e);
        return res.send("Unexpected error occured");
    }
}
exports.gardenQuery = gardenQuery;
