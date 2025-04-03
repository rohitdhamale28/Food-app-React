import mongoose from "mongoose";
import { sampleFood_list } from "./data.js";
import { foodModel } from '../../models/foodModel.js';

const initData = {
  data: sampleFood_list,
};

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/react-food-app");
}

const initDB = async () => {
  await foodModel.deleteMany({});
  
  // Convert `_id` to ObjectId before inserting into the database
  initData.data = initData.data.map((obj) => ({
    ...obj,
    _id: new mongoose.Types.ObjectId(), // Generates a valid ObjectId
    owner: '65a10de59f406151d2b192df',
  }));

  await foodModel.insertMany(initData.data);
  console.log("Data initialized");
};

initDB();
