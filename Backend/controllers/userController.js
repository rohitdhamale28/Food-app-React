import userModel from "../models/user";
import jwt from "jsonwebtoken"
import bcryt from "bcrypt"
import validator from "validator"

const loginUser = async (req,res)=>{

}


const createToken = (id)=>{
    return jwt.sign({id},)
}

const registerUser = async(req,res)=>{
const {name,password,email} = req.body;
try{
    const exists = await userModel.findOne({email});
    if(exists){
        return res.json({success:false,message:"User Already Exists"})
    }
    // validating form 
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter valid email"})}
    if(password.length<8){
        return res.json({success:false,message:"Please enter a strong password"})
         
    }
    const salt =await bcryt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);
    const newUser = new userModel({
        name:name, 
        email:email,
        password:password
    }); 
    const user = await newUser.save();

}catch(error){

}
}

export default {loginUser,registerUser}