const express = require('express');

const router = express.Router();

const { registerUser, userLogin, getCurrentUser } = require("../controller/authController");

router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/me', getCurrentUser);

module.exports = router;