/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex.raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE");
  // Deletes ALL existing entries
  // await knex('items').del()
    await knex("items").insert([
    { user_id: 2, item_name: "Wireless Mouse", description: "Ergonomic 2.4GHz mouse", quantity: 5 },
    { user_id: 2, item_name: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard", quantity: 2 },
    { user_id: 2, item_name: "USB-C Hub", description: "6-in-1 space gray aluminum hub", quantity: 10 },
    { user_id: 2, item_name: "Dual Monitor Stand", description: "Heavy duty gas spring desk mount", quantity: 1 },
    { user_id: 2, item_name: "HD Webcam", description: "1080p autofocsing streaming camera", quantity: 4 },
    { user_id: 2, item_name: "Noise Cancelling Headphones", description: "Over-ear wireless bluetooth headphones", quantity: 3 },
    { user_id: 2, item_name: "External SSD", description: "1TB high speed portable drive", quantity: 7 },

    { user_id: 3, item_name: "Water Bottle", description: "Stainless steel insulated bottle", quantity: 15 },
    { user_id: 3, item_name: "Backpack", description: "Waterproof laptop backpack", quantity: 3 },
    { user_id: 3, item_name: "Notebook", description: "A5 grid ruled hardcover journal", quantity: 20 },
    { user_id: 3, item_name: "Gel Pen Set", description: "0.5mm fine point black ink pens 12-pack", quantity: 35 },
    { user_id: 3, item_name: "Desk Organizer", description: "Mesh metal multi-functional tray", quantity: 12 },
    { user_id: 3, item_name: "Sticky Notes Stack", description: "Pastel colored self-stick notes 6-pack", quantity: 50 },
    { user_id: 3, item_name: "Highlighter Pack", description: "Chisel tip pastel markers 6-pack", quantity: 18 },

    { user_id: 4, item_name: "Coffee Mug", description: "Ceramic minimalist matte mug", quantity: 8 },
    { user_id: 4, item_name: "Desk Mat", description: "Extra large felt wool desk pad", quantity: 4 },
    { user_id: 4, item_name: "LED Desk Lamp", description: "Dimmable lamp with wireless charger", quantity: 6 },
    { user_id: 4, item_name: "Ember Warmer", description: "Smart electric mug heating coaster", quantity: 2 },
    { user_id: 4, item_name: "Foot Rest Cushion", description: "Ergonomic teardrop memory foam cushion", quantity: 5 },
    { user_id: 4, item_name: "Lumbar Support Pillow", description: "Premium mesh office chair pillow", quantity: 3 },
    { user_id: 4, item_name: "Cable Management Clips", description: "Silicone magnetic desktop cord holders", quantity: 25 }
  ]);

};
