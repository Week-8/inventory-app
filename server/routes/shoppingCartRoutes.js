const express = require("express");
const { ShoppingCart, Item } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const cartItem = await ShoppingCart.create({
      userId,
      itemId,
      quantity,
    });

    const populatedCartItem = await ShoppingCart.findByPk(cartItem.id, {
      include: Item,
    });

    res.status(201).json(populatedCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create cart item" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const cartItems = await ShoppingCart.findAll({
      where: { userId },
      include: Item,
    });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
});

// Update a cart item's quantity or status
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, status } = req.body;

    // Find the cart item by ID
    const cartItem = await ShoppingCart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    // Update the cart item
    await cartItem.update({ quantity, status });

    // Return the updated cart item with item details
    const updatedCartItem = await ShoppingCart.findByPk(cartItem.id, {
      include: Item,
    });

    res.status(200).json(updatedCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update cart item" });
  }
});

// Delete a cart item
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the cart item
    const cartItem = await ShoppingCart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    await cartItem.destroy();

    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete cart item" });
  }
});

module.exports = router;
