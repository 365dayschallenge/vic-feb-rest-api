const express = require("express");
const router = express.Router();
const Buyers = require("../models/buyers");

module.exports = router;
// Get all
router.get("/", async (req, res) => {
  try {
    const buyers = await Buyers.find();
    res.json(buyers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get one
router.get("/:id", async (req, res) => {
  const buyer = new Buyer({
    itemName: req.params.itemName,
    // quantity: req.params.quantity,
    price: req.params.price,
    // isSelected: req.params.isSelected,
    // buyingDate: req.params.buyingDate,
  });
  try {
    const newBuyer = await buyer.save();
    res.status(201).json(newBuyer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Creating one
router.post("/", function (req, res) {});
// Updating one
router.patch("/:id", function (req, res) {});
// Deleting one
router.delete("/:id", function (req, res) {});
