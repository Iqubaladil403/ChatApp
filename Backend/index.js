import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();  

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true, // if using cookies for auth
}));

//mongodb connection
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}


// const mongoURI =  "mongodb://localhost/chatDb";
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("MongoDB is connected"))
//   .catch((err) => console.log("MongoDB connection error:", err.message));


//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);



// --------------- code for deployment --------------------

if (process.env.NODE_ENV === 'production') {
    const dirPath =  path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirPath, './Frontend/dist','index.html'));
    });
}

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});