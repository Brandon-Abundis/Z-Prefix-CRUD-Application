const express = require("express");
const {getAll, deleteUserById} = require("../controller/userController");
const router = express();

router.get("/", getAll);
router.delete("/delete/:id", deleteUserById);

module.exports = router;