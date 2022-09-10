const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  description: String,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;