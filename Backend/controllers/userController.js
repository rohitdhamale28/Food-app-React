import userModel from "../models/user.js";
import jwt from "jsonwebtoken"
import bcryt from "bcrypt"
import validator from "validator"

export const loginUser = async (req,res)=>{
    const {email,password}= req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false, message:"User Doessn't exist"})
        }

        const isMatch = await bycrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false, message:"Invalid Credentials"});
        }
        const token = createToken(user._id);
    res.json({success:true, token });

    }catch(error){
        console.log(error);
        res.json({success:false, message:"error" });
    
    }
}


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SCERET);
}

export const registerUser = async(req,res)=>{
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
        password:hashedPassword
    }); 
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({success:true, token });
}catch(error){
    console.log(error);
    res.json({success:false, message:"error" });

}
}

// export default {loginUser,registerUser}