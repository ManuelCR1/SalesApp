const mongoose = require("mongoose");
const User = require("./User");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
 quantity: {     
   type: Number,
   default: 1,
   required: true,
   },
  deliverable: {
    type: Boolean,
    default: true,
    required: true,
  },
  seller: {
    type: User.schema,
    required: true,
  }
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
