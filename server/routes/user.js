const express = require("express");
const { User } = require("../models");

const router = express.Router();
router.use(express.json());

router.post("/login", async (req, res) => {
  console.log("object");
  const { email, password } = req.body;
  try {
    console.log("Fetching all items");
    const user = await User.findOne({
      where: {
        email,
        password,
      },
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      res.status(404).json({ message: "Username or Password Incorrect" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    console.log("Fetching all items");
    const userExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userExists) {
      res.status(404).json({ message: "Account already in use" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role: "user",
    });

    res.json("success");
  } catch (error) {
    console.error("Error fetching items:", error);
  }
});

module.exports = router;
