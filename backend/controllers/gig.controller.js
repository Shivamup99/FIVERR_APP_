import Gigs from '../models/gig.model.js'
import { createError } from '../middleware/createError.js';

export const createGig = async(req,res,next)=>{
  if(!req.isSeller) return next(createError(403,'Only sellers can create the Gig!'));
  const newGig = new Gigs({
    userId:req.userId,
    ...req.body,
  });
  try {
    const savedGig = await newGig.save();
    res.status(201).json({message:'gig created successfully',result:savedGig})
    
  } catch (error) {
    next(error);
  }
}

export const getGig = async(req,res,next)=>{
    try {
        let gig = await Gigs.findById(req.params.id);
        if(!gig) return  next(createError('404','Gig not found'));
        res.status(200).json({result:gig});
    } catch (error) {
        next(err);
    }
}

export const getAllGig = async(req,res,next)=>{
    let qu = req.query
    const filters ={
        ...(qu.cat && {cat:qu.cat}),
        ...(qu.userId && {userId:qu.userId}),
        ...((qu.min || qu.max) && {
            price:{...(qu.min && {$gt:qu.min} ), ...(qu.max &&{ $lt:qu.max})}
        }),
        ...(qu.search && {title:{$regex:qu.search, $options:"i"}})
    };
    try {
        let gig =  await Gigs.find(filters).sort({_id:-1});
        res.status(200).json(gig);
    } catch (error) {
        next(error)
    }
}

export const deleteGig = async(req,res,next)=>{
    try {
        let gig = await Gigs.findById(req.params.id);
        if(gig.userId!==req.userId) return next(createError(403,'You can not delete this Gig !'));
        await Gigs.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Gig Deleted Successfully !'});
    } catch (error) {
        next(error)
    }
}