/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

exports.seed = async function(knex) {
  //hopefully resets id counter back to 1...
  await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE");

  await knex('users').insert([
    {
      first_name: 'admin',
      last_name: '',
      username: 'inventory_manager',
      password: await bcrypt.hash("password", SALT_ROUNDS)
    },
    {
      first_name: 'Brandon',
      last_name: 'Abundis',
      username: 'some-user',
      password: await bcrypt.hash("123", SALT_ROUNDS)
    },
    {
      first_name: 'John',
      last_name: 'Doe',
      username: 'visitor123',
      password: await bcrypt.hash("password123", SALT_ROUNDS)
    }
  ]);
};
