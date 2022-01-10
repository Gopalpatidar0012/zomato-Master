import mongoose from "mongoose";

export default async()=>{
    // const DB='mongodb+srv://gopal_patidar:gopalpatidar@cluster0.bsc2x.mongodb.net/book-my-show?retryWrites=true&w=majority'
    return await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
       
    });
};
