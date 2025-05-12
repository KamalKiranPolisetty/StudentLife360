import BusTicket from '../models/busTicket.js';
export const purchaseBusTickets = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { zones, quantity } = req.body;
    let totalPrice = 0;

    if (!zones || !Array.isArray(zones)) {
      return res.status(400).json({ message: 'Invalid or missing zones array.' });
    }

    zones.forEach(zone => {
      switch (zone) {
        case 'Zone1':
          totalPrice += 2 * quantity;
          break;
        case 'Zone2':
          totalPrice += 4 * quantity;
          break;
        case 'Zone3':
          totalPrice += 6 * quantity;
          break;
        default:
          return res.status(400).json({ message: 'Invalid zone.' });
      }
    });

    const busTicket = await BusTicket.create({ userId, zones, quantity, totalPrice });

    res.status(201).json({ busTicket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



export const purchaseBusCards = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { quantity } = req.body;
    const totalPrice = 40 * quantity;

    const busCard = await BusTicket.create({ userId, quantity, totalPrice });

    res.status(201).json({ busCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getTicketsAndCards = async (req, res) => {
  try {
    const userId = req.user.userId;

    const tickets = await BusTicket.find({ userId });

    res.status(200).json({ tickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};