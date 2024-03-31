"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionQuerySchema = void 0;
const zod_1 = require("zod");
const type_1 = require("../types/type"); // Assuming the path to your type definitions
exports.QuestionQuerySchema = zod_1.z
    .object({
    garden: zod_1.z.nativeEnum(type_1.GardenLocationQuery),
    season: zod_1.z.nativeEnum(type_1.SeasonQuery),
    size: zod_1.z.nativeEnum(type_1.GardenSizeQuery),
    experience: zod_1.z.nativeEnum(type_1.GardeningExperienceQuery),
    goal: zod_1.z.array(zod_1.z.nativeEnum(type_1.GardeningGoalQuery)),
    timeCommitment: zod_1.z.nativeEnum(type_1.TimeCommitmentQuery),
})
    .strict();
