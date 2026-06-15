/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE"); // need this for id's to relax
  // await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      first_name: 'admin',
      last_name: '',
      username: 'inventory_manager',
      password: await bcrypt.hash("password", SALT_ROUNDS)
    },
    {
      id: 2,
      first_name: 'Brandon',
      last_name: 'Abundis',
      username: 'some-user',
      password: await bcrypt.hash("123", SALT_ROUNDS)
    },
    {
      id: 3,
      first_name: 'John',
      last_name: 'Doe',
      username: 'visitor123',
      password: await bcrypt.hash("password123", SALT_ROUNDS)
    }

  ]);
};
