 import express from "express";
 import cors from "cors";
 import { connetDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";

 const app = express();
 const port =4000;

 app.use(express.json())
 app.use(cors())

//  DB connection
connetDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

 app.get("/", (req,res)=>{
    res.send("API Working");
 })

 app.listen(port, ()=>{
    console.log(`listening on port:${port}`);
 })

//  mongodb+srv://rohitdhamale05:<db_password>@cluster0.82ltj62.mongodb.net/?