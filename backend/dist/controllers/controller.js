"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionQuery = void 0;
const zod_1 = __importDefault(require("zod"));
const dotenv_1 = __importDefault(require("dotenv"));
const schema_1 = require("../schemas/schema");
const generative_ai_1 = require("@google/generative-ai");
const util_1 = require("../utils/util");
dotenv_1.default.config();
const TOP_NUMBER = 5;
const TODO_LIST_NUMBER = 5;
async function questionQuery(req, res) {
    try {
        const input = schema_1.QuestionQuerySchema.parse(req.body);
        const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `You are an Horticulturist with more than 20 years of experience gardening plants. Your job is to make sure you recommend users the top ${TOP_NUMBER} crops to plant based on the following information:
    1. The crops is planted at ${input.garden}
    2. The season is ${input.season}
    3. The size of the future garden is ${input.size}
    4. Their gardening experience is ${input.experience}
    5. Their gardening goals is/are ${input.goal.join(", ")}
    6. Their time commitment is ${input.timeCommitment} a day
    With that in mind, generate the following data in this exact json format (no text no response except json):
    [{ name: string, dailytodolist: ["...", "...", "...", "...", "..."], description: string}]
    Make sure that that it applies that for ${TOP_NUMBER} crops exactly with ${TODO_LIST_NUMBER} dailytodolists per crop. Never include optional in your tasks.
`;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const plants = JSON.parse(text);
        for (const plant of plants) {
            plant["image"] = await (0, util_1.getImage)("anime " + plant.name);
        }
        return res.json(plants);
    }
    catch (e) {
        if (e instanceof zod_1.default.ZodError) {
            res.status(400).send(e);
        }
        else {
            console.error(e);
            res.status(500).send("Unexpected error occurred.");
        }
    }
}
exports.questionQuery = questionQuery;
