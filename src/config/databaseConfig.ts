import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
let dbURI: any = process.env.MONGO_URI || "mongodb://localhost:27017/vastudevayaha"; // Replace with your MongoDB URI
const connectDB = async () => {
mongoose.connect(dbURI, {})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
}


export default connectDB;