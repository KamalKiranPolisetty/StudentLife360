import Activity from '../models/activity.js';
import UserSelection from '../models/userSelection.js';

export const getScheduledActivities = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const activities = await Activity.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });

    res.status(200).json({ activities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const selectActivities = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { activityIds } = req.body;

    const userSelections = activityIds.map(activityId => ({
      userId: userId,
      activityId: activityId
    }));

    await UserSelection.insertMany(userSelections);

    res.status(200).json({ message: "Activities selected successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserSelectedActivities = async (req, res) => {
  try {
    const userId = req.user.userId;

    const userSelectedActivities = await UserSelection.find({ userId }).populate('activityIds');

    res.status(200).json({ userSelectedActivities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();

    res.status(200).json({ activities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

