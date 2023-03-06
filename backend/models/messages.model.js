import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    conversationId:{
        type:String,
        required:true
    },
    buyerId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
},{timestamps:true});

const messageModel = mongoose.model('Messages',messageSchema);
export default messageModel;