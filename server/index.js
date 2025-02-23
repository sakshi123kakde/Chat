const express =require('express');
const app =express();
const bodyParser=require('body-parser');
const cors =require('cors');

require('dotenv').config();
require ('./Models/db');
const AuthRouter= require('./Routes/AuthRouter')

const PORT=process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);

app.get('/',(req,res)=>{
    res.send("heloo");
})
app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})