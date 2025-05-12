import User from "../models/user.js";
import Textbook from '../models/book.js';
import Roommate from "../models/roomMate.js";

export const findRoommates = async (req, res) => {
  try {
    const { moveInDate, gender, priceRange } = req.body;
    
    const roommates = await Roommate.find({ 
      gender,
      approximatePrice: { $gte: priceRange - 1000, $lte: priceRange }, 
    });

    res.status(200).json({ roommates });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const searchTextbooks = async (req, res) => {
  try {
    const { title, author, isbn } = req.query;
    let query = {};

    if (title) {
      query.title = { $regex: new RegExp(title, 'i') }; // Case-insensitive search
    }

    if (author) {
      query.author = { $regex: new RegExp(author, 'i') }; // Case-insensitive search
    }

    if (isbn) {
      query.isbn = isbn;
    }

    const textbooks = await Textbook.find(query);

    if (textbooks.length === 0) {
      return res.status(404).json({ message: 'No matching textbooks found.' });
    }

    res.status(200).json({ textbooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const searchPeople = async (req, res) => {
  try {
    const { department, firstName, lastName } = req.query;
    let query = {};

    if (department) {
      query.department = department;
    }

    if (firstName) {
      query.firstName = { $regex: new RegExp(firstName, "i") }; 
    }

    if (lastName) {
      query.lastName = { $regex: new RegExp(lastName, "i") };
    }

    const users = await User.find(query).select("firstName lastName address city department email");

    if (users.length === 0) {
      return res.status(404).json({ message: "No matching records found." });
    }

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
