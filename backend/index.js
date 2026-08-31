import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/db/db.js";

connectDB();

// temporory test
import { v2 as cloudinary } from "cloudinary";

cloudinary.api
  .ping()
  .then((res) => console.log("✅ Cloudinary Connected", res))
  .catch((err) => console.log("❌ Cloudinary Error", err));

// app.listen(3000, () => {
//   console.log(" Server is running on port 3000");
// });

export default app;
