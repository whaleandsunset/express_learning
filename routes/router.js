import express from 'express';
import userRouter from './user.router.js';
import familyRouter from './family.router.js';

const router = express.Router();

userRouter(router);
familyRouter(router);

export default router;