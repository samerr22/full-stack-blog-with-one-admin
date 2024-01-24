import express from 'express';
import { verifyToken } from '../utils/VerfiyUser.js';
import { createComment } from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);

export default router;
