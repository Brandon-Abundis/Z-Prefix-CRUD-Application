const db = require("../db/db");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const getAll = async (req, res) => {
  try {
    const allUsers = await db("users").select("*");
    res.status(200).send(allUsers);

  } catch(error) {
    res.status(500).send({ message: error});
  }
};

module.exports = {getAll};