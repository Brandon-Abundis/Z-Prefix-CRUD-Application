const express = require('express');

const router = express();

const { registerUser, userLogin } = require("../controller/authController");

router.post('/register', registerUser);
router.post('/login', userLogin);

module.exports = router;