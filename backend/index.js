import express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse incoming requests: req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth",authRoutes)

app.listen(PORT,()=> {
    connectDB()
    console.log("Server is running in Port: ",PORT);
});