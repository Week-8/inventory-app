const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

// Define your routes here - CRUD

//return one item - by id

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const oneItem = await Item.findByPk(id);
    res.json(oneItem);
  } catch (error) {
    console.error("Error fetching item:", error);
  }
});

//return all items

router.get("/", async (req, res) => {
  try {
    console.log("Fetching all items");
    const Items = await Item.findAll({});
    res.json(Items);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
});

//add an item

router.post("/", async (req, res) => {
  console.log("test");
  try {
    const { name, price, description, category, stock, image } = req.body;

    if (!name || !price || !description || !category || !stock || !image) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newItem = await Item.create({
      name,
      price,
      description,
      category,
      stock,
      image,
    });

    res
      .status(201)
      .json({ message: `Item added successfully`, AddedItem: newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete an item - by id

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await Item.findByPk(id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    await deletedItem.destroy();
    res.json({
      message: "Item deleted successfully",
      deletedItem: deletedItem,
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Update an item
//patch only updates certain required fields -- better than put

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, description, category, stock, image } = req.body;

    const itemToUpdate = await Item.findByPk(id);
    if (!itemToUpdate) {
      return res.status(404).json({ error: "Item not found" });
    }

    const updatedItem = await itemToUpdate.update({
      name: name ?? itemToUpdate.name,
      price: price ?? itemToUpdate.price,
      description: description ?? itemToUpdate.description,
      category: category ?? itemToUpdate.category,
      stock: stock?? itemToUpdate.stock,
      image: image ?? itemToUpdate.image,
    });

    res.json({ message: "Item updated successfully", updatedItem });
  } catch (error) {
    console.error("Error updating item", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
