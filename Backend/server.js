 import express from "express";
 import cors from "cors";
 import { connetDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import mongoose from "mongoose";
import multer from "multer";


import { foodModel } from './models/foodModel.js';



 const app = express();
 const port =4000;

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
app.use("/images", express.static('uploads'));


app.post("/api/food/add",upload.single('image'),async(req,res)=>{
 let image_filename =`${req.file.filename}`;
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
    res.json({success:true, message: "Food Added"} );
   //  if(success){
   //    console.log("success");
   //  }
 }catch(err){
    console.log(err)
    res.json({success:false, message: "Error"})
 }
});

app.get("/api/food/list",async(req,res)=>{
  try{
    const foods= await foodModel.find({})
res.json( {success:true , data :foods})
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