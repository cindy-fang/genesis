import { Request, Response } from "express";
import z from "zod";
import dotenv from "dotenv";
import { QuestionQuerySchema } from "../schemas/schema";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  GardeningExperienceQuery,
  GardeningGoalQuery,
  GardenLocationQuery,
  GardenSizeQuery,
  SeasonQuery,
  TimeCommitmentQuery,
} from "../types/type";

dotenv.config();

const questionnaire: Array<{
  garden: GardenLocationQuery;
  season: SeasonQuery;
  size: GardenSizeQuery;
  experience: GardeningExperienceQuery;
  goal: GardeningGoalQuery;
  timeCommitment: TimeCommitmentQuery;
}> = [];

export async function questionQuery(req: Request, res: Response) {
  try {
    const result = QuestionQuerySchema.parse(req.body);
    questionnaire.push(result);
    return res.send("Acutally Works!");
  } catch (e) {
    if (e instanceof z.ZodError) {
      res.status(400).send(e);
    } else {
      console.error(e);
      res.status(500).send("Unexpected error occurred.");
    }
  }
}
