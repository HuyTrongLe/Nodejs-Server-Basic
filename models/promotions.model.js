// promotions.model.js

const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  label: {
    type: String
  }, 
  price: {
    type: String
  },
  description: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false  
  }
});

const Promotion = mongoose.model('Promotion', PromotionSchema);

module.exports = Promotion;