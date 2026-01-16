import dotenv from "dotenv";


dotenv.config();

const env = {
    port : process.env.PORT || 3000,
    jwtSecret : process.env.JWT_SECRET,
    jwtExpiresIn : process.env.JWT_EXPIRES_IN || "1h",
    mongoUri : process.env.MONGO_URI,
};

if(!env.jwtSecret){
    throw new Error("JWT_SECRET is not defined in environment variables");
}

export default env;