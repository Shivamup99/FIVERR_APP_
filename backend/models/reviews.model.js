import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    gigId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true 
    },
    star:{
        type:Number,
        enum:[1,2,3,4,5],
        required:true
    }
   
},{timestamps:true});

const reviewModel = mongoose.model('Reviews',reviewSchema);
export default reviewModel;