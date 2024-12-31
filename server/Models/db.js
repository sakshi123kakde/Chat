const mongoose=require('mongoose');
const mongo_url=process.env.MONGO_CON
mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
  console.log("mongodb connection error")
})