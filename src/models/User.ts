import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        required:[true , "Name Field is Required"],
        type: Schema.Types.String,
    },
    email:{
        required:[true , "Email Field is Required"],
        type: Schema.Types.String,
        unique:true,
        trim:true
    },
    password:{
        required:[true , "Password is Required"],
        type: Schema.Types.String,
    }
});
export const User = mongoose.models.User || mongoose.model("User" , userSchema);