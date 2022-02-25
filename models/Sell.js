const mongoose = require("mongoose");
const User = require("./User");
const Product = require("./Product");

const SellSchema = new mongoose.Schema({
  seller: {
    type: User.schema,
    required: true,
  },
  sell: {
    type: Product.schema,
    required: true,
  },
  placeOfSell: {
    type: String,
    required: true,
  },
 subtotal: {     
   type: Number,
   required: true,
   },
  total: {
    type: Number,
    required: true,
  },
  dateOfSell: {
    type: Date,
    default: Date.now,
    required: true,
  },
  dateOfDelivery: {
    type: Date,
    default: Date.now,
    required: true,
  }
});
const Sell = mongoose.model("Sell", SellSchema);
module.exports = Sell;
