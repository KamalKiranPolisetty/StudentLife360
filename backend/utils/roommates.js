import Roommate from "../models/roomMate.js";

// Function to generate random date within a range
const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Function to generate random gender
const getRandomGender = () => {
  const genders = ['male', 'female', 'other'];
  return genders[Math.floor(Math.random() * genders.length)];
};

// Function to generate random approximate price
const getRandomPrice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate random roommates and save them to the database
const generateRandomRoommates = async (numRoommates) => {
  try {
    // Define range for move-in date (e.g., last year to next year)
    const startDate = new Date(new Date().getFullYear() - 1, 0, 1);
    const endDate = new Date(new Date().getFullYear() + 1, 11, 31);

    // Generate and save random roommates
    const roommates = [];
    for (let i = 0; i < numRoommates; i++) {
      const newRoommate = new Roommate({
        moveInDate: getRandomDate(startDate, endDate),
        gender: getRandomGender(),
        approximatePrice: getRandomPrice(300, 1000), // Example price range
        // Add more fields as needed
      });
      roommates.push(newRoommate);
    }
    await Roommate.insertMany(roommates);
    console.log(`${numRoommates} roommates added successfully`);
  } catch (error) {
    console.error('Error generating random roommates:', error);
  }
};

export {generateRandomRoommates};