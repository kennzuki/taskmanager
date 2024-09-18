import express from 'express';
import dotenv from 'dotenv';
import Product from './models/product.model.js';
import { connectDB } from './config/db.js';
import mongoose from "mongoose";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.get('/api/products', async (req, res) => {
 
  try {
    const products = await Product.find({})
    res.status(200).json({ success: true, data:products });
  } catch (error) {
    console.log("error findig product",error.message);
    
    res.status(500).json({ success: false, message: 'server error' });
  }
})


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

app.put('api/products:id',async (req, res) => {
  const { id } = req.params;

	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
});



app.delete('api/products:id', async (req, res) => {
  const { id } = req.params;
  console.log('id', id);

  try {
    await product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'product deleted' });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:' + PORT);
});
