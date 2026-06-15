const express = require("express");
const {getAllItems, getItemById, getItemByUserId, updateItemById, updateItemEntirely, createItem, deleteItemById} = require("../controller/itemController");
const router = express();

router.get("/", getAllItems);
router.get("/id/:id", getItemById);
router.get("/user_id/:id", getItemByUserId);
router.patch("/update/:id", updateItemById);
router.put("/put/:id", updateItemEntirely);
router.post("/create", createItem);
router.delete("/delete/:id", deleteItemById);

module.exports = router;