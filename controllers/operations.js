// operations.js

const Promotion = require('./models/promotions.model');

exports.createPromotion = async (promotion) => {
  try {
    return await Promotion.create(promotion);
  } catch (err) {
    throw err; 
  }
}

exports.findPromotions = async () => {
  try {
    return await Promotion.find();
  } catch (err) {
    throw err;
  }
}

exports.findPromotionById = async (id) => {
  try {
    return await Promotion.findById(id);
  } catch (err) {
    throw err;
  }  
}

exports.updatePromotion = async (id, update) => {
  try {
    return await Promotion.findByIdAndUpdate(id, update, {new: true}); 
  } catch (err) {
    throw err;
  }
}

exports.deletePromotion = async (id) => {
  try {
    return await Promotion.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}