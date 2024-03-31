"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = __importDefault(require("express"));
const questions_1 = __importDefault(require("./questions"));
exports.rootRouter = express_1.default.Router();
exports.rootRouter.use("/questions", questions_1.default);
exports.default = exports.rootRouter;
