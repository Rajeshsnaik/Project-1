import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';
import connectDB from './config/db.js';
import morgan from "morgan";

//configure env
dotenv.config();

//connect db
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//rest api
app.get("/", (req, res) => {
    console.log("Server is running on port 8080");
    res.send("<h1>Welcome to Ecommerce Application</h1>");
})

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});