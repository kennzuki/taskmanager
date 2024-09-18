import express from "express";

import { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router();
 router.get('/',createProduct )
  
  
 router.post('/',getProduct );
  
 router.put('/:id',updateProduct);
  
  
  
 router.delete('/:id',deleteProduct);

export default router