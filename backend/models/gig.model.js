import mongoose from "mongoose";

const gigSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    stars:{
        type:Number,
        default:0
    },
    starNum:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:true
    },
    cat:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true, 
    },
    images:{
        type:[String],
        required:false, 
    },
    shortTitle:{
        type:String,
        required:true, 
    },
    shortDesc:{
        type:String,
        required:true, 
    },
    deliveryTime:{
        type:Number,
        required:true, 
    },
    revisionTime:{
        type:Number,
        required:true, 
    },
    features:{
        type:[String],
        required:false, 
    },
    sales:{
        type:Number,
        default:0
    }
},{timestamps:true});

const gigModel = mongoose.model('Gigs',gigSchema);
export default gigModel;