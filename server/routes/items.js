const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

// Define your routes here - CRUD

//return one item - by id

router.get("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const oneItem = await Item.findByPk(id);
        res.json(oneItem);
    } catch(error) {
        console.error("Error fetching item:", error)
    }
});


//return all items

router.get("/", async (req, res) => {
    try{
        console.log('Fetching all items')
        const Items = await Item.findAll({});
        res.json(Items)
    } catch (error) {
        console.error("Error fetching items:", error);
    }
})


module.exports = router;
