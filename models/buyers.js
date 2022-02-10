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
      default: 0,
      
    },
    isSelected: {
      type: Boolean,
      Default: false,
    },
    buyingDate: {
      type: Date,

      default: Date.now(),
    },
});

module.exports = mongoose.model('list', listSchema)