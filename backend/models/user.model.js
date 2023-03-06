import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true 
    },
    img:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:true 
    },
    desc:{
        type:String,
        required:false 
    },
    isSeller:{
        type:Boolean,
        default:false 
    },
},{timestamps:true});

const userModel = mongoose.model('Users',userSchema);
export default userModel;