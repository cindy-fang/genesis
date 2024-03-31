"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
exports.questionRouter = express_1.default.Router();
exports.questionRouter.post("/", controller_1.questionQuery);
exports.default = exports.questionRouter;
