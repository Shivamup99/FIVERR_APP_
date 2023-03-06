import express from 'express'
import { deleteUser } from '../controllers/user.controller.js';
import { verifyJwtToken } from '../middleware/jwt.js';

const router = express.Router()

router.delete('/delete/:id', verifyJwtToken, deleteUser)

export default router;