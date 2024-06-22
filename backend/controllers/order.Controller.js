const Order = require('../models/order');
const Product = require('../models/Product');

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { products, customerName, customerEmail, customerAddress } = req.body;

    // Calculate total price and validate products
    let totalPrice = 0;
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.product} not found` });
      }
      if (item.quantity > product.stock) {
        return res.status(400).json({ message: `Insufficient stock for product ${product.name}` });
      }
      totalPrice += product.price * item.quantity;
    }

    // Create the order
    const order = new Order({
      products,
      totalPrice,
      customerName,
      customerEmail,
      customerAddress
    });

    await order.save();

    // Update product inventory
    for (const item of products) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity }
      });
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
