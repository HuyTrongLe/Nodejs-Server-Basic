require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const operations = require('./operations.js');

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
app.get('/', async (req, res) => {
    try {




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

    } catch (error) {
        console.log("err", + error);
    }
}
);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
});