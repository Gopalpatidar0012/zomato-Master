//Library
import express from "express";
import bcrypt  from "bcrypt";
import jwt  from "jsonwebtoken";
//Models
import { UserModel } from "../../database/allModels.js";

//Create a Router
const Router =express.Router();


/**
 * Router       /signup
 * Description  Register new User
 * Parmeter     none
 * Access       Public
 * Method       POST
 *           
 */

Router.post("/signup",async(req,res)=>{

    try{
        const{email,password,phoneNumber,fullName} =req.body.credentials;
        const checkUserByEmail=await UserModel.findOne({email});
        const checkUserByphoneNumber=await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByphoneNumber){
            return res.json({user:"User already exists"});
        }

        //hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword= await bcrypt.hash(password,bcryptSalt);
        
        // save data to database
        await UserModel.create({
            ...req.body.credentials,password:hashedPassword,
        });

        //generate jwt authentication token (package name is jsonwebtoken)

        const token = jwt.sign({user:{email,fullName}},"zomatoApp");

           return res.status(200).json({token,status:"success"});

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})

export default Router;


