import mongoose ,{Schema} from "mongoose";

const videoSchema=new Schema({

    videoFile:{
        type:String , // Cloudinary url
        required:true
    }, 
    thumbnail:{
        type:String , // Cloudinary url
        required:true
    },
      title:{
        type:String , // Cloudinary url
        required:true
    },
    description:{
        type:String , // Cloudinary url
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPubulished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Video=mongoose.model("Video",videoSchema)
