import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 4000; // install dotenv to use this
const URI = process.env.MONGODB_URI;

import bookRoutes from "./routes/book.routes.js";
import userRoutes from "./routes/user.routes.js";

try{
  mongoose.connect(URI);
  console.log("Connected to MongoDB database");
}
catch(err){
  console.log("Error connecting to MongoDB database", err);
}

app.use("/books", bookRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
