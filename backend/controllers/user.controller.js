import Users from '../models/user.model.js'

export const deleteUser =async(req,res)=>{
const user = await Users.findById(req.params.id)
console.log(req.params.id)
    // I write to string bcz _id is an object so cant delete object so make it as string
    if(req.userId!==user._id.toString()){
        return res.status(403).json({message:'You are not authorized to do the action !'});
    }
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'user deleted successfully.'})

}