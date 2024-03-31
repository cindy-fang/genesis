import {
  GardeningExperienceQuery,
  GardeningGoalQuery,
  GardenLocationQuery,
  GardenSizeQuery,
  SeasonQuery,
  TimeCommitmentQuery,
} from "../types/type";

function getRandomEnumValue<T extends Record<string, unknown>>(
  enumObject: T
): T[keyof T] {
  const enumKeys = Object.keys(enumObject) as (keyof T)[];
  const randomIndex = Math.floor(Math.random() * enumKeys.length);
  return enumObject[enumKeys[randomIndex]];
}

describe("The questions api works!", () => {
  it("Questionnaire submission actually works", async () => {
    expect(
      await (
        await fetch(`http://localhost:3000/questions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            garden: getRandomEnumValue(GardenLocationQuery),
            season: getRandomEnumValue(SeasonQuery),
            size: getRandomEnumValue(GardenSizeQuery),
            experience: getRandomEnumValue(GardeningExperienceQuery),
            goal: [getRandomEnumValue(GardeningGoalQuery)],
            timeCommitment: getRandomEnumValue(TimeCommitmentQuery),
          }),
        })
      ).json()
    ).toStrictEqual("Acutally Works!");
  });
});
