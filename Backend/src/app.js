import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";
 
// import { listen } from "node:quic";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}))
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async()=> {
    const connectionDb = await mongoose.connect("mongodb+srv://Ashishrana21123:21123ar@cluster0.swbxise.mongodb.net/")//atlas prr databsase banaya
    console.log(`MONGO Connected DB host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("Listen in on port 8000")
    });
}
    
start();