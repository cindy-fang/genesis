import express from "express";
import questionRouter from "./questions";

export const rootRouter = express.Router();
rootRouter.use("/questions", questionRouter);

export default rootRouter;
