const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  username: {
    type:String,
    required:true
  },
  image: String,
  chipcount: Number, // Required field
  currenttable: String,
  currentCards: Array,
});

const Player = mongoose.model("Game", PlayerSchema);

module.exports = Player;
