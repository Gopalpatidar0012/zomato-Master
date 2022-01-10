

import dotenv from "dotenv";
dotenv.config();
import express from "express";//import express package
import cors from "cors";
import helmet from "helmet";
import  mongoose from "mongoose";

//Database Connection
import ConnectDB from "./database/connection.js";

//API
import Auth from "./API/Auth";

const zomato = express();//declaring express application(using express)
zomato.use(helmet());//this is package and provide additional security and secure our website.
zomato.use(cors());//cross origin request ko allow karata h(we setup cors in both frontend and backend).
zomato.use(express.json());//by the help of we (accept and send) the data in json formate.
                           //JSON is most common way to transfer data in json formate on internet.
                          //body parser middleware (it read json body request).

//Application Route
zomato.use("/auth",Auth)


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



zomato.listen(4000, ()=>{
    // console.log("runningggggg");
    ConnectDB()
    .then(() =>{
        console.log("server runningggg");
    })
    .catch((err)=>{
        console.log("failed......",err)
    })
});

// const app = express();


/* 
Route         /
Description    get all user details 
Access         PUBLIC
Parameter      NONE
Methods        get

*/

//http://localhost:3000/
// app.get("/", async (req, res) => {
//     return res.json({"Welcome":"To my Backend Software for the ZOMATO-MASTER"});
// });



/* 
Route         /movies
Description    get all user details
Access         PUBLIC
Parameter      NONE
Methods        get

*/

//http://localhost:3000/movies
// app.get("/movies", async (req, res) => {
//     const getAllMovies = await MoviesModel.find(); //find() -> return array of object
//     return res.json(getAllMovies);
// });



/* 
Route         /movie-id
Description    get single user details by id
Access         PUBLIC
Parameter      NONE
Methods        get

*/

// http://localhost:5000/movie-id
// app.get("/movie/:id",async (req, res) => {
//     // console.log(req.params);
//     const {id} = req.params;
   
//     console.log(id);
//     const getSpecificMovies = await MoviesModel.findOne({_id: id}); //findOne()-> return only one object
//     // console.log(getSpecificBook);
//     // console.log(getSpecificBook.length);
//     // if(getSpecificMovie===null) {
//     //     return res.json({"error": `No Book found for the ISBN of ${id}`});
//     // }
//     return res.json(getSpecificMovies);
// });





/* 
Route         /User-register
Description    Post single user details in users collection
Access         PUBLIC
Parameter      NONE
Methods        Post

*/


//http://localhost:3000/User-register
// app.post("/user-register",async (req, res) => {
//     //console.log(req.body);
//     const addNewUser=await UserModel.create(req.body);
   
//     return res.json({
//         UserAdded: addNewUser,
//         message:"User was added"
//     });
// });

// app.listen(5000, () => {
//     console.log("MY EXPRESS APP IS RUNNING.....")
// });