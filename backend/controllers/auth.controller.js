import Users from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from '../middleware/createError.js';

export const register = async(req,res,next)=>{
try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    const newUser = new Users({
        ...req.body,
        password:hash,
    });
    let response = await newUser.save();
    res.status(201).json({message:'user created successfully',result:response})
} catch (error) {
    next(error);
}
};

export const login = async(req,res,next)=>{
    try {
        const user = await Users.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found !"))
        const comparePassword = bcrypt.compareSync(req.body.password, user.password);
        if(!comparePassword) return next(createError(400,"Username or Password wrong !"))
        const token = jwt.sign({
            id:user._id, isSeller:user.isSeller
        },process.env.JWT_KEY)

        const {password , ...info} = user._doc;
        res.cookie("accessToken", token,{httpOnly:true,})
        .status(200).json({message:'user loggedin successfully.',result:info})
    } catch (error) {
       next(error)
    }  
};

export const logout = async(req,res)=>{
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure:true,
    }).status(200).json({message:"User has been logged out."})
};