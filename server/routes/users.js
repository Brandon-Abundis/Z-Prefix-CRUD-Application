const express = require("express");
const {getAll} = require("../controller/userController");
const router = express();

router.get("/", getAll);

module.exports = router;