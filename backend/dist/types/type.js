"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCommitmentQuery = exports.GardeningGoalQuery = exports.GardeningExperienceQuery = exports.GardenSizeQuery = exports.SeasonQuery = exports.GardenLocationQuery = void 0;
var GardenLocationQuery;
(function (GardenLocationQuery) {
    GardenLocationQuery["CONDO_INTERIOR"] = "Condo interior";
    GardenLocationQuery["CONDO_BALCONY"] = "Condo balcony";
    GardenLocationQuery["CONDO_OFFICE"] = "Condo office";
    GardenLocationQuery["FACTORY_INTERIOR"] = "Factory interior";
    GardenLocationQuery["BUILDING_ROOFTOP"] = "Building rooftop";
})(GardenLocationQuery || (exports.GardenLocationQuery = GardenLocationQuery = {}));
var SeasonQuery;
(function (SeasonQuery) {
    SeasonQuery["SPRING"] = "Condo interior";
    SeasonQuery["SUMMER"] = "Condo balcony";
    SeasonQuery["FALL"] = "Condo office";
    SeasonQuery["WINTER"] = "Factory interior";
})(SeasonQuery || (exports.SeasonQuery = SeasonQuery = {}));
var GardenSizeQuery;
(function (GardenSizeQuery) {
    GardenSizeQuery["TINY"] = "Tiny (1-2 plants, 20 cm longest side)";
    GardenSizeQuery["SMALL"] = "Small (3-5 plants, 50 cm longest side)";
    GardenSizeQuery["MEDIUM"] = "Medium (6-10 plants, 1 m longest side)";
    GardenSizeQuery["LARGE"] = "Large (11-20 plants, 1.5 m longest side)";
    GardenSizeQuery["EXTRA_LARGE"] = "Extra Large (20+ plants, 2 m longest side)";
})(GardenSizeQuery || (exports.GardenSizeQuery = GardenSizeQuery = {}));
var GardeningExperienceQuery;
(function (GardeningExperienceQuery) {
    GardeningExperienceQuery["NO_EXPERIENCE"] = "No Prior Experience";
    GardeningExperienceQuery["SOME_EXPERIENCE"] = "Some Experience";
    GardeningExperienceQuery["EXPERIENCED"] = "Experienced";
})(GardeningExperienceQuery || (exports.GardeningExperienceQuery = GardeningExperienceQuery = {}));
var GardeningGoalQuery;
(function (GardeningGoalQuery) {
    GardeningGoalQuery["SAVE_MONEY_GROCERIES"] = "Save on Groceries";
    GardeningGoalQuery["SAVE_MONEY_TRANSPORTATION"] = "Reduce Transportation Costs";
    GardeningGoalQuery["REDUCE_CARBON_FOOTPRINT"] = "Reduce Carbon Footprint";
    GardeningGoalQuery["LEARN_TO_GARDEN"] = "Learn to Garden";
    GardeningGoalQuery["EAT_SELF_GROWN_CROPS"] = "Eat Self-Grown";
    GardeningGoalQuery["IMPROVE_HEALTH"] = "Improve Health";
})(GardeningGoalQuery || (exports.GardeningGoalQuery = GardeningGoalQuery = {}));
var TimeCommitmentQuery;
(function (TimeCommitmentQuery) {
    TimeCommitmentQuery["LESS_THAN_2_HOURS"] = "Less Than 2 Hours";
    TimeCommitmentQuery["_2_TO_4_HOURS"] = "2-4 Hours";
    TimeCommitmentQuery["_4_TO_7_HOURS"] = "4-7 Hours";
    TimeCommitmentQuery["_7_PLUS_HOURS"] = "7+ Hours";
})(TimeCommitmentQuery || (exports.TimeCommitmentQuery = TimeCommitmentQuery = {}));
