import dotenv from "dotenv";
dotenv.config();
import express from "express";//import express package
import cors from "cors";
import helmet from "helmet";
import  mongoose from "mongoose";

//Database Connection
import ConnectDB from "./database/connection.js";

//API
import Auth from "./API/Auth/index.js";

const zomato = express();
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());

//Application Route
zomato.use("/auth",Auth)

zomato.listen(8000, ()=>{
   
    ConnectDB()
    .then(() =>{
        console.log("server running");
    })
    .catch((err)=>{
        console.log(" Server not connected......",err)
    })
});

//  const { MongoClient } = require('mongodb');





//MONGODB CONNECTION

// const DB='mongodb+srv://gopal_patidar:gopalpatidar@cluster0.bsc2x.mongodb.net/book-my-show?retryWrites=true&w=majority'
// mongoose.connect(DB,{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     //useCreateIndex:true,
//     //usefindandmodify:false
// }).then(()=>{
//     console.log("connection success");
// }).catch((err)=>console.log(err));