export enum GardenLocationQuery {
  CONDO_INTERIOR = "Condo interior",
  CONDO_BALCONY = "Condo balcony",
  CONDO_OFFICE = "Condo office",
  FACTORY_INTERIOR = "Factory interior",
  BUILDING_ROOFTOP = "Building rooftop",
}

export enum SeasonQuery {
  SPRING = "Condo interior",
  SUMMER = "Condo balcony",
  FALL = "Condo office",
  WINTER = "Factory interior",
}

export enum GardenSizeQuery {
  TINY = "Tiny (1-2 plants, 20 cm longest side)",
  SMALL = "Small (3-5 plants, 50 cm longest side)",
  MEDIUM = "Medium (6-10 plants, 1 m longest side)",
  LARGE = "Large (11-20 plants, 1.5 m longest side)",
  EXTRA_LARGE = "Extra Large (20+ plants, 2 m longest side)",
}

export enum GardeningExperienceQuery {
  NO_EXPERIENCE = "No Prior Experience",
  SOME_EXPERIENCE = "Some Experience",
  EXPERIENCED = "Experienced",
}

export enum GardeningGoalQuery {
  SAVE_MONEY_GROCERIES = "Save on Groceries",
  SAVE_MONEY_TRANSPORTATION = "Reduce Transportation Costs", // More concise wording
  REDUCE_CARBON_FOOTPRINT = "Reduce Carbon Footprint",
  LEARN_TO_GARDEN = "Learn to Garden",
  EAT_SELF_GROWN_CROPS = "Eat Self-Grown", // Shortened for brevity
  IMPROVE_HEALTH = "Improve Health",
}

export enum TimeCommitmentQuery {
  LESS_THAN_2_HOURS = "Less Than 2 Hours",
  _2_TO_4_HOURS = "2-4 Hours",
  _4_TO_7_HOURS = "4-7 Hours",
  _7_PLUS_HOURS = "7+ Hours",
}
