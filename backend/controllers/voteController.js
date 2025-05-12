import Vote from "../models/vote.js";

export const submitVote = async (req, res) => {
  const { userId } = req.user;

  try {
    const existingVote = await Vote.findOne({ userId });

    if (existingVote) {
      return res.status(400).json({ message: "User has already voted." });
    }

    const { candidate } = req.body;
    const vote = new Vote({ userId, candidate });
    await vote.save();
    res.status(201).json({ message: "Vote submitted successfully." });
  } catch (error) {
    console.error("Error submitting vote:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getPollResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: "$candidate", count: { $sum: 1 } } },
    ]);

    const chartData = results.map((result) => ({
      candidate: result._id,
      votes: result.count,
    }));

    res.status(200).json({ pollResults: chartData });
  } catch (error) {
    console.error("Error retrieving poll results:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
