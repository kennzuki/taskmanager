import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/products', (res, req) => {
  
});

console.log(process.env.MONGO_URI);


app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});