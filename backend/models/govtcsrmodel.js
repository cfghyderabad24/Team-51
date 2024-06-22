const mongoose = require("mongoose");

const govtcsrSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
      },

    phone: {
      type: Number,
    },

    email: {
      type: Number,
      required: true,
    },
    donations:[{
        amount:Number
  }]
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;