"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionQuery = void 0;
const zod_1 = __importDefault(require("zod"));
const dotenv_1 = __importDefault(require("dotenv"));
const schema_1 = require("../schemas/schema");
dotenv_1.default.config();
const questionnaire = [];
async function questionQuery(req, res) {
    try {
        const result = schema_1.QuestionQuerySchema.parse(req.body);
        questionnaire.push(result);
        return res.send("Acutally Works!");
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
