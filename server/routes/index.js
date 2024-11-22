const express = require("express");
const router = express.Router();

// different model routers
router.use("/items", require("./items"));
router.use("/auth", require("./user"));
// router.use("/cart", "./shoppingCartRoutes");

module.exports = router;
