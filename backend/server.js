import express from "express";
const app = express();

app.get('/',(res, req) => {
    req.send('sent the file')
})
app.listen(5000, ()=> {
    console.log('running on port');
    
})