import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.get('/products',(res, req) => {
    req.send('sent the file')
})

console.log(process.env.MONGO_URI);


app.listen(5000, ()=> {
    console.log('running on port');
    
})