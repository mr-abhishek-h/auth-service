import express from "express";
import authRoutes from "../src/routes/auth.routes.js";
import protectedRoutes from "../src/routes/protected.routes.js";
import adminRoutes from "./routes/admin.routes.js";



const app = express();

app.use(express.json());
app.use("/admin", adminRoutes);

app.use("/auth", authRoutes);
app.use("/protected",protectedRoutes);

export default app;