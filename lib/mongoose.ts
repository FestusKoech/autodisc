import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log ("Server connection error!");

    if(isConnected) return console.log("Connected succesfully");

    try{

        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        
        console.log('Connected to server!')

    }

    catch (error) {

        console.log(error);

    }


};


