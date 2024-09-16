import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from 'multer'

const foodRouter = express.Router();
foodRouter.post("/add",addFood);
// Img Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});



export default foodRouter;