const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
      required: true,
    default: 0,
  },
  isSelected: {
    type: Boolean,
    required: true,
    Default: false,
  },
  buyingDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model('list', listSchema)