import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {

    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log ("Server connection error!");

    if(isConnected) return console.log("Connected succesfully");

    try{

    }

    catch (error) 
    
    {

    }


}