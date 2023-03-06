import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
mongoose.set('strictQuery', true);

const url = process.env.MONGO_URL;

const connection =()=>{
    try {
        mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default connection; 