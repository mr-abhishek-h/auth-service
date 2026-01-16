/** 
 * User identity model for auth service 
 * 
 * id: unique identifier for the user (internal)
 * email : primary unique identifier used for authentication
 * passwordHash : hashed password 
 * role : authorization level
 * isActive : whether the identity is enabled or disabled 
 * createdAt : when the user was created 
 * updatedAt : last update stamp
 * **/


import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
        },
        passwordHash : {
            type : String,
            required : true,
        },
        role : {
            type : String,
            enum : ["user","admin"],
            default: "user",
        },
        isActive : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps : true,
    }
);


const User = mongoose.model("User",userSchema);

export default User;