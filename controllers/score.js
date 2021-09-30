const jwt = require("jsonwebtoken");
const Score = require("../models/Score");
const User = require("../models/User")
const sanitize = require("mongo-sanitize")

exports.saveScore = async (req, res) => {
  const score = new Score({
    name: req.body.name,
    score: req.body.score,
  });
  const alreadyExists = await Score.findOne({
    name: score.name,
    score: score.score,
  }).exec();
  if (alreadyExists) {
    res.send("Score already exists");
  } else {
    try {
      const savedScore = await score.save();
      res.send(savedScore);
    } catch (error) {
      res.send(error);
    }
  }
};

exports.getHighestScore = async (req, res) => {
  const user = req.body.name;
  try {
    const highestScore = await Score.findOne({ name: user }).sort("-score");
    res.json(highestScore.score);
  } catch (error) {}
};

exports.getScoreBoard = async(req, res) => {
  try {
    const scoreBoard = await Score.find().sort({score : -1}).limit(5)

    res.json(scoreBoard)

  } catch (error) {
    res.send(error)
  }
  
}
