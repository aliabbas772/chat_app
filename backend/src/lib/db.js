import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Conected: ", conn.connection.host)
    } catch (error) {
        console.error("Error Connecting to MongoDB: ", error)
        process.exit(1);
    }
}