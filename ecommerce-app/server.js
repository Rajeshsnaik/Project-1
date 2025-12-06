import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';

//configure env
dotenv.config();

//rest object
const app = express();

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