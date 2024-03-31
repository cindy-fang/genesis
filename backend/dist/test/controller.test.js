"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../types/type");
function getRandomEnumValue(enumObject) {
    const enumKeys = Object.keys(enumObject);
    const randomIndex = Math.floor(Math.random() * enumKeys.length);
    return enumObject[enumKeys[randomIndex]];
}
describe("The questions api works!", () => {
    it("Questionnaire submission actually works", async () => {
        expect(await (await fetch(`http://localhost:3000/questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                garden: getRandomEnumValue(type_1.GardenLocationQuery),
                season: getRandomEnumValue(type_1.SeasonQuery),
                size: getRandomEnumValue(type_1.GardenSizeQuery),
                experience: getRandomEnumValue(type_1.GardeningExperienceQuery),
                goal: [getRandomEnumValue(type_1.GardeningGoalQuery)],
                timeCommitment: getRandomEnumValue(type_1.TimeCommitmentQuery),
            }),
        })).json()).toStrictEqual("Acutally Works!");
    });
});
