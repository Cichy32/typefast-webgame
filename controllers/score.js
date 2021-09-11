const jwt = require("jsonwebtoken");
const Score = require("../models/Score");

exports.saveScore = async (req, res) => {
  const score = new Score({
    name: req.body.name,
    score: req.body.score,
  });

  try {
    const savedScore = await score.save();
    res.send(savedScore);
  } catch (error) {
    console.log("Something went wrong");
  }
};

exports.getHighestScore = async (req, res) => {
  const user = req.body.name;
  try {
    const highestScore = await Score.findOne({ name: user }).sort("-score"); // give me the max;
    res.json(highestScore.score)
  } catch (error) {
      
  }


};
