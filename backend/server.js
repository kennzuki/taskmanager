import express from 'express';
import dotenv from 'dotenv';
import Product from './models/product.model.js';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

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

app.delete('api/products:id', async (res, req) => {
  const { id } = req.params;
  console.log('id', id);

  try {
    await product.findByIdAndDelete(id);
    res.status(200).json({ success: true, msg: 'product deleted' });
  } catch (error) {
    res.status(404).json({ success: false, msg: 'Product not found' });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:' + PORT);
});
