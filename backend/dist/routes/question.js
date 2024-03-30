"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.questionRouter = express_1.default.Router();
exports.questionRouter.use("/questions");
exports.questionRouter.get("/hello", (req, res) => {
    return res.send("Hello!");
});
// questionRouter.post("/intro", intro);
// questionRouter.post("/textToSpeech", textToSpeech);
exports.default = exports.questionRouter;
