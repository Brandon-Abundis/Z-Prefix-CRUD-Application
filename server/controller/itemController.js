const db = require("../db/db");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const getAllItems = async (req, res) => {
  try {
    const inventoryData = await db("items").select("*");
    res.status(200).send(inventoryData);
  } catch(error) {
    res.status(500).send({ message: error.message});
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const inventoryItem = await db("items").select("*").where("id", id).first();
    res.status(200).send(inventoryItem);
  } catch(error) {
    res.status(500).send({ message: error.message});
  }
};

const getItemByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const inventoryData = await db("items").select("*").where("user_id", id);
    res.status(200).send(inventoryData);
  } catch(error) {
    res.status(500).send({ message: error.message});
  }
};
// primary way to use as a PATCH, PUT.
// check for everything and send it.
const updateItemById = async (req, res) => {
  const { id } = req.params;
  const { item_name, description, quantity } = req.body;

  try {
    if (!item_name && !description && !quantity) {
      return res.status(400).send({ message: "No data, or undefined?" });
    }

    const itemData = await db("items").select("*").where("id", id).first();

    const updatedItem = await db("items")
      .where("id", id)
      .update({
        item_name: item_name ? item_name : itemData.item_name,
        description: description ? description : itemData.description,
        quantity: quantity !== undefined ? quantity : itemData.quantity
      })
      .returning("*");

    res.status(200).send(updatedItem[0]);

  } catch(error) {
    res.status(500).send({ message: error.message });
  }
};

// Need this reduntent function for the rubric!
const updateItemEntirely = async (req, res) => {
  const { id } = req.params;

  const { item_name, description, quantity } = req.body;

  try {
    if (item_name === undefined || description === undefined || quantity === undefined) {
      return res.status(400).send({
        message: "Bad Request. PUT requires all fields item_name, description, quantity to be provided."
      });
    }

    const updatedItem = await db("items")
      .where("id", id)
      .update({
        item_name: item_name,
        description: description,
        quantity: quantity
      })
      .returning("*");

    if (updatedItem.length === 0) {
      return res.status(404).send({ message: "Item not found." });
    }

    res.status(200).send(updatedItem[0]);
  } catch(error) {
    res.status(500).send({ message: error.message });
  }
};


const createItem = async (req, res) => {
  const { user_id, item_name, description, quantity } = req.body;

  try {
    if(!user_id || !item_name || !description || !quantity) {
      return res.status(400).send({ message: "missing data."});
    }

    const resultData = await db("items")
      .insert({
        user_id: user_id,
        item_name: item_name,
        description: description,
        quantity: quantity
      }).returning("*");

    res.status(200).send(resultData[0]);

  } catch(error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteItemById = async (req, res) => {
  const {id} = req.params;

  try {
    const item = await db("items").where("id", id).del();

    if(!item) {
      return res.status(404).send({ message: "Item not found." });
    }

    return res.status(200).send({message: `Item id: ${id} deleted!`})

  } catch(error) {
    if (!res.headersSent) { // need this to avoid crazy database failure!!!!
      return res.status(500).send({ message: error.message });
    }
  }
};


module.exports = {getAllItems, getItemById, getItemByUserId, updateItemById, updateItemEntirely, createItem, deleteItemById};