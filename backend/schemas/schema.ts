import { z } from "zod";
import {
  SeasonQuery,
  GardenSizeQuery,
  GardeningExperienceQuery,
  GardeningGoalQuery,
  TimeCommitmentQuery,
  GardenLocationQuery,
} from "../types/type"; // Assuming the path to your type definitions

export const QuestionQuerySchema = z
  .object({
    garden: z.nativeEnum(GardenLocationQuery),
    season: z.nativeEnum(SeasonQuery),
    size: z.nativeEnum(GardenSizeQuery),
    experience: z.nativeEnum(GardeningExperienceQuery),
    goal: z.array(z.nativeEnum(GardeningGoalQuery)),
    timeCommitment: z.nativeEnum(TimeCommitmentQuery),
  })
  .strict();
export type QuestionQuerySchemaType = typeof QuestionQuerySchema;
