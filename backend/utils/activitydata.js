import Activity from "../models/activity.js";

// Function to generate activity data
const generateActivityData = () => {
  const activities = [
    { name: "Activity 1", date: new Date(), location: "Location 1" },
    { name: "Activity 2", date: new Date(), location: "Location 2" },
    { name: "Activity 3", date: new Date(), location: "Location 3" },
    { name: "Activity 4", date: new Date(), location: "Location 4" },
    { name: "Activity 5", date: new Date(), location: "Location 5" },
  ];
  return activities;
};

const saveActivitiesToDatabase = async () => {
  try {
    await Activity.insertMany(generateActivityData());
    console.log("Activities added to the database successfully");
  } catch (error) {
    console.error("Error saving activities to the database:", error);
  }
};

export { saveActivitiesToDatabase };
