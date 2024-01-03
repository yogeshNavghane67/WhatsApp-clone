import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const URL = process.env.MONGO_URL
    try {
        await mongoose.connect(URL,{ useUnifiedTopology: true});
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;