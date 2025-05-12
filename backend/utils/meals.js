// import MealPlan from "../models/mealPlan.js";

// // Function to generate a random number within a range
// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// // Function to generate random meal plans and save them to the database
// const generateRandomMealPlans = async (numPlans) => {
//   try {
//     // Generate and save random meal plans
//     const plans = [];
//     const durations = ["month", "semester"];
//     for (let i = 0; i < numPlans; i++) {
//       const duration = durations[getRandomNumber(0, 1)]; // Randomly select duration
//       let price;
//       if (duration === "month") {
//         price = 600;
//       } else if (duration === "semester") {
//         price = 600 * 0.95; // Apply 5% discount
//       }
//       const newPlan = new MealPlan({ duration, price });
//       plans.push(newPlan);
//     }
//     await MealPlan.insertMany(plans);
//     console.log(`${numPlans} meal plans added successfully`);
//   } catch (error) {
//     console.error("Error generating random meal plans:", error);
//   }
// };

// export { generateRandomMealPlans };

import MealPlan from "../models/mealPlan.js";

// Function to generate a random number within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate random meal plans and save them to the database
const generateRandomMealPlans = async (numPlans) => {
  try {
    // Generate and save random meal plans
    const plans = [];
    const durations = ["month", "fall", "spring", "summer"]; // Updated duration options
    for (let i = 0; i < numPlans; i++) {
      const duration = durations[getRandomNumber(0, durations.length - 1)]; // Randomly select duration
      let price;
      switch (duration) {
        case "month":
          price = 30*25; // Monthly plan
          break;
        case "fall":
          price = (120*25) * 0.95; // Fall semester with a discount
          break;
        case "spring":
          price = 90*25; // Spring semester standard price
          break;
        case "summer":
          price = 60*2; // Summer semester, possibly cheaper
          break;
        default:
          price = 600; // Default case, if needed
      }
      const newPlan = new MealPlan({ duration, price });
      plans.push(newPlan);
    }
    await MealPlan.insertMany(plans);
    console.log(`${numPlans} meal plans added successfully`);
  } catch (error) {
    console.error("Error generating random meal plans:", error);
  }
};

export { generateRandomMealPlans };
