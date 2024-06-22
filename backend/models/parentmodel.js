const mongoose = require("mongoose");

const ParentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
      },
    password:String,

    phone: {
      type: Number,
    },

    email: {
      type: Number,
      required: true,
    },

    child: childSchema,
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