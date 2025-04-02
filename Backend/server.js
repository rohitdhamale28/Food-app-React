 import express from "express";
 import cors from "cors";
 import { connetDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import mongoose from "mongoose";
import multer from "multer";
import { deserialize } from 'v8';

import fs from 'fs';

import { foodModel } from './models/foodModel.js';
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'



 const app = express();
 const port =8000;

 app.use(express.json())
 app.use(cors())

//  DB connection
// connetDB();

main()
  .then(() => {
    console.log("connection successful")
  })
  .catch((err) => console.log(err));

// used to form a connection
async function main() {
  // this is to connect with local 
  await mongoose.connect("mongodb://127.0.0.1:27017/react-food-app");

}

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage:storage});


// api endpoints
// app.use("/api/food", foodRouter);
 app.use("/api/user", userRouter);


app.post("/api/food/add",upload.single('image'),async(req,res)=>{
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
}
 let image_filename =`${req.file.filename}`;
 console.log('File uploaded successfully:', image_filename);
console.log(req.body); 
console.log(req.file);
 const food = new foodModel({
    name: req.body.name,
    description : req.body.description,
    price: req.body.price,
    category : req.body.category,
    image : image_filename,
 })
 try{
    await food.save();
    // res.redirect("http://localhost:5173/add")
    res.json({success:true, message: "Food Added"} );
   //  if(success){
   //    console.log("success");
   //  }
 }catch(err){
    console.log(err)
    res.json({success:false, message: "Error"})
 }
});
app.use("/images", express.static('uploads'));

app.get("/api/food/list",async(req,res)=>{
  try{
    const foods= await foodModel.find({})
res.json( {success:true , data :foods})
  }catch(err){
   console.log(err);
   res.json( {success:false, message:"Error"})

  }
 
  });

  app.post("/api/food/remove",async (req,res) =>{
    try {
      console.log(req.body.id);
      const food = await foodModel.findById(req.body.id)
      fs.unlink(`uploads/${food.image}`,()=>{})
      await foodModel.findByIdAndDelete(req.body.id)
      res.json( {success:true , message:"food removed"})
    }catch(err){
      console.log(err);
      res.json( {success:false, message:"Error"})
   
    }
  });



 app.get("/", (req,res)=>{
    res.send("API Working");
 })

 app.listen(port, ()=>{
    console.log(`listening on port:${port}`);
 })

//  mongodb+srv://rohitdhamale05:<db_password>@cluster0.82ltj62.mongodb.net/?