import BusTicket from "../models/busTicket.js";

// Function to generate a random number within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate random bus tickets and save them to the database
const generateRandomBusTickets = async (numTickets) => {
  try {
    // Generate and save random bus tickets
    const tickets = [];
    for (let i = 0; i < numTickets; i++) {
      const zones = [`Zone${getRandomNumber(1, 3)}`]; // Randomly select a zone
      const quantity = getRandomNumber(1, 5); // Random quantity between 1 and 5
      const totalPrice = zones.reduce((total, zone) => {
        switch (zone) {
          case 'Zone1':
            return total + (2 * quantity);
          case 'Zone2':
            return total + (4 * quantity);
          case 'Zone3':
            return total + (6 * quantity);
          default:
            return total;
        }
      }, 0);
      const newTicket = new BusTicket({ zones, quantity, totalPrice });
      tickets.push(newTicket);
    }
    await BusTicket.insertMany(tickets);
    console.log(`${numTickets} bus tickets added successfully`);
  } catch (error) {
    console.error('Error generating random bus tickets:', error);
  }
};

 export  {generateRandomBusTickets};
