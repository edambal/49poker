const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
  dealerCards: Array,
  //playerHands: Array,
  currenttable: String,
  potAmount: Number,
  smallBlind: Number, // player with smallBlind
  bigBlind: Number, // player with bigBlind
  players:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }]
});

const Round = mongoose.model("Round", RoundSchema);

module.exports = Round;
