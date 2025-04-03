

 import mongoose from "mongoose";
 import { sampleListings } from "./data.js";
 import Listing from "../../models/listing.js";
 console.log(sampleListings);
 const initData = {
   data: sampleListings,
 };
 // const dbURL= "mongodb+srv://rohitdhamale05:cM79cg.PxW9N7uz@cluster0.82ltj62.mongodb.net/?retryWrites=true&w=majority";
 
 
 // console.log(dbURL);
 main()
   .then(()=>{
     console.log("connection successful")
   })
   .catch((err)=>console.log(err));
 
 // used to form a connection
  async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/react-food-app");
  }
 
  const initDB= async () => {
     await Listing.deleteMany({});
      initData.data= initData.data.map((obj)=> ({...obj, owner: '65a10de59f406151d2b192df'}));
     await Listing.insertMany(initData.data);
     console.log("data Initiallised");
  }
 
  initDB();