import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected with ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error: ${error.message}`.bgRed.white);

    }
}

export default connectDB;