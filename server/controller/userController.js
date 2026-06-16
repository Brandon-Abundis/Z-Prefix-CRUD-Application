const db = require("../db/db");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const getAll = async (req, res) => {
  try {
    const allUsers = await db("users").select("id", "first_name", "last_name", "username");
    res.status(200).send(allUsers);

  } catch(error) {
    return res.status(500).send({ message: error});
  }
};

// this is literally bec i dont want to pull up postgres and do it manually,.
const deleteUserById = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await db("users").where("id", id).del();

    if(!user) {
      return res.status(404).send({ message: "User does not exist." });
    }
    return res.status(200).send({ message: `User at id: ${id} deleted!`});

  } catch(error) {
    return res.status(500).send({ message: error});
  }
};

module.exports = {getAll, deleteUserById};