import MealPlan from '../models/mealPlan.js';

export const purchaseMealPlan = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { duration } = req.body;
    let price;

    if (duration === 'month') {
      price = 600;
    } else if (duration === 'semester') {
      price = 3600 * 0.95;
    } else {
      return res.status(400).json({ message: 'Invalid duration.' });
    }

    const existingMealPlan = await MealPlan.findOne({ userId });

    if (existingMealPlan) {
      await MealPlan.findByIdAndDelete(existingMealPlan._id);
    }

    const mealPlan = await MealPlan.create({ userId, duration, price });

    res.status(201).json({ mealPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getPurchasedMealPlans = async (req, res) => {
  try {
    const userId = req.user.userId;

    const mealPlans = await MealPlan.find({ userId });

    res.status(200).json({ mealPlans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
