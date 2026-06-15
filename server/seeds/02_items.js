/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex.raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE");
  // Deletes ALL existing entries
  await knex('items').del()
  await knex("items").insert([
    { user_id: 2, item_name: "Wireless Mouse", description: "Ergonomic 2.4GHz mouse", quantity: 5 },
    { user_id: 2, item_name: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard", quantity: 2 },
    { user_id: 2, item_name: "USB-C Hub", description: "6-in-1 space gray aluminum hub", quantity: 10 },

    { user_id: 3, item_name: "Water Bottle", description: "Stainless steel insulated bottle", quantity: 15 },
    { user_id: 3, item_name: "Backpack", description: "Waterproof laptop backpack", quantity: 3 },
    { user_id: 3, item_name: "Notebook", description: "A5 grid ruled hardcover journal", quantity: 20 },

    { user_id: 4, item_name: "Coffee Mug", description: "Ceramic minimalist matte mug", quantity: 8 },
    { user_id: 4, item_name: "Desk Mat", description: "Extra large felt wool desk pad", quantity: 4 },
    { user_id: 4, item_name: "LED Desk Lamp", description: "Dimmable lamp with wireless charger", quantity: 6 }
  ]);
};
