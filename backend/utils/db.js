import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://sagarzinzala9:Sagar@cluster0.bvteivb.mongodb.net/instagram",
          
        );
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;   