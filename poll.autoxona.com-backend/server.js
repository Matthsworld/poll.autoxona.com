const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/votingDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const VoteSchema = new mongoose.Schema({
  totalVotes: { type: Number, default: 0 },
});

const Vote = mongoose.model("Vote", VoteSchema);

// Get total votes
app.get("/api/votes", async (req, res) => {
  const voteData = await Vote.findOne();
  res.json({ totalVotes: voteData ? voteData.totalVotes : 0 });
});

// Cast a vote
app.post("/api/vote", async (req, res) => {
  let voteData = await Vote.findOne();
  if (!voteData) voteData = new Vote({ totalVotes: 0 });

  voteData.totalVotes += 1;
  await voteData.save();

  res.json({ totalVotes: voteData.totalVotes });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
