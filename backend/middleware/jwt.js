import jwt from 'jsonwebtoken'
import { createError } from './createError.js';

export const verifyJwtToken =(req,res,next)=>{
    const token = req.cookies.accessToken;
    if(!token) return next(createError(401,'You are not authenticated !'))
    jwt.verify(token , process.env.JWT_KEY, async(err,payload)=>{
        if(err) return next(createError(403,'Token is not valid !')) 
        req.userId = await payload.id;
        req.isSeller = await payload.isSeller;
        next();
    });
}