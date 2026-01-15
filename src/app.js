import express from "express";

const app = express();

app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"ok",
        message:"Auth service is running"
    });
});

export default app;