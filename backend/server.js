import express from 'express';
import dotenv from 'dotenv';
import Product from './models/product.model.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.post('api/products', async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error in Create product:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:' + PORT);
});
