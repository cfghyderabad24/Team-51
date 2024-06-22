const mongoose = require("mongoose");

const NGOSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
      },
    phone: {
        type: Number,
      },
  
    preferences: {
      type: String,
    },

    producthistory: [{
        productName: String,
        quantity: Number,
        price: Number
    }]
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;