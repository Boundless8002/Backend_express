import mongoose,{Schema} from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        
    },
    fullName:{
        type:String,
        trim:true,
        index:true
        
    },  
    avatar:{
        type:String,  //cloudinary url
        required:true
    },
    coverImage:{
        type:String,
        
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    }
     ,
   refreshToken:{
    type:String
   } 
},{timestamps:true});


export const User=mongoose.model("User",userSchema);
