// server.js

const db = require('./db');
const operations = require('./operations');

db.once('open', async () => {

  // Create promotion
  const newPromotion = await operations.createPromotion({
    name: "Weekend Grand Buffet", 
    price: "19.99",
  });
  
  console.log("Created Promotion:", newPromotion);

  // Find all promotions
  const promotions = await operations.findPromotions();
  console.log("Found Promotions:", promotions);

  // Find promotion by ID
  const promotion = await operations.findPromotionById(newPromotion._id);
  console.log("Found Promotion:", promotion);

  // Update promotion
  const updated = await operations.updatePromotion(promotion._id, {
    featured: true  
  });
  console.log("Updated Promotion:", updated);

  // Delete promotion
  const deleted = await operations.deletePromotion(updated._id);
  console.log("Deleted Promotion:", deleted);

  process.exit();
});