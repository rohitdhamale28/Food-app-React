import mongoose from "mongoose";

export const connetDB = async () => {


mongoose.connect('mongodb://127.0.0.1:27017/react-food-app');
}
