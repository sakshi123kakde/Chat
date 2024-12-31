const express =require('express');
const app =express();
require('dotenv').config();
require ('./Models/db');

const PORT=process.env.PORT || 5001;

app.get('/',(req,res)=>{
    res.send("heloo");
})
app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})