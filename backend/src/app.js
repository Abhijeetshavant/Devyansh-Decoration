import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
// import authRoutes from "./routes/auth.routes.js";
import cardRoutes from "./routes/cards.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://devyansh-decoration-frontend.vercel.app/",
    credentials: true,
  }),
);
// app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);

// app.post("/api/upload", (req, res) => {
//   console.log("api/upload ", req.body);
// });

// app.post("api/cards/create", (req, res) => {
//   console.log("api/carda/create ", req.body);
// });

export default app;
