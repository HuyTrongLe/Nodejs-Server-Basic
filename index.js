require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/books');


const app = express();
const PORT = process.env.PORT || 3001;

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

app.get('/', (req, res) => {
    res.send({ title: 'Books' });
});


app.get('/add-note', async (req, res) => {
    try {
        await Book.insertMany([
            {
                title: "Sons of",
                body: "Body of",
            },
            {
                title: "Game of",
                body: "Body of",
            }
        ]);
        res.send('Books Added..');
    } catch (error) {
        console.log("err", + error);

    }
})

app.get('/books', async (req, res) => {
    const book = await Book.find();
    if (book) {
        res.json(book)
    } else {
        res.send("Something went wrong.");
    }
});

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


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
});