import express from "express";
import { questionQuery } from "../controllers/controller";
export const questionRouter = express.Router();

questionRouter.post("/", questionQuery);

export default questionRouter;
