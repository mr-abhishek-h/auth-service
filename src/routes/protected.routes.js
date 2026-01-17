import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js"

const router = express.Router();

router.get("/me",authMiddleware,(req,res)=>{
    return res.status(200).json({
        message:"Protected route accessed",
        user:req.user,
    });
});

export default router;



