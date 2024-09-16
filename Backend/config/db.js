import mongoose from "mongoose";

export const connetDB = async () => {
    await mongoose.connect( 'mongodb+srv://rohitdhamale05:cM79cg.PxW9N7uzse@cluster0.82ltj62.mongodb.net/food-app').then(() => console.log("DB connected"))
}