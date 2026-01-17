import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import requireRole from "../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  requireRole("admin"),
  (req, res) => {
    return res.status(200).json({
      message: "Admin dashboard accessed",
      user: req.user,
    });
  }
);

export default router;
