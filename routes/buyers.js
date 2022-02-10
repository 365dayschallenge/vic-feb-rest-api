const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const List = require("../models/buyers");

module.exports = router;
// Get all
router.get("/", async (req, res) => {
  try {
    const list = await List.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get one
router.get("/:id",getList,(req, res) => {
  res.json(res.list)
});

// Creating one
router.post("/", async (req, res) => {
  const list = new List({
    itemName: req.body.itemName,
    price: req.body.price,
   
  });  

  try { 
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// Updating one
router.patch("/:id", getList, async(req, res) => { 
  if (req.body.itemName != null) {
    res.list.itemName = req.body.itemName;
  }
  if (req.body.price != null) {
    res.list.price = req.body.price;
  }
  try {
    updatedlist = await res.list.save();
    res.json(updatedlist);
  } catch (e) {
    res.status(400).json({message: err.message})
  }
});


// Deleting one
router.delete("/:id", getList, async (req, res) => {
  try {
    await res.list.remove()
    res.json({message: "Deleted successfully"})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

async function getList(req, res,next) {
  let list
  try {
    list = await List.findById(req.params.id);

    if (list == null) {
      return res.status(404).json({
        message: 'List not found'
      })
    }
  }
  catch(err) {
    return res.status(500).json({
      message: err.message
    })
  }
  res.list = list
  next()
}

