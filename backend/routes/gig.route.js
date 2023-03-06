import express from 'express'
import { createGig, deleteGig, getAllGig, getGig } from '../controllers/gig.controller.js';
import { verifyJwtToken } from '../middleware/jwt.js';
const router = express.Router()

router.post('/create',verifyJwtToken,createGig);
router.get('/get',verifyJwtToken,getAllGig);
router.get('/get/:id',verifyJwtToken,getGig);
router.delete('/delete/:id',verifyJwtToken,deleteGig)

export default router;