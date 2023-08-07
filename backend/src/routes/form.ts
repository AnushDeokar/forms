import {Request,Response,Application, response} from 'express';
import { Router } from 'express';
import jwt, {Secret} from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel, {User} from '../models/user';
import authverify from '../middleware/authverify';

const router = Router();

router.post('/create', authverify, async(req: Request, res:Response)=>{
    // TODO: Creating Form creation route
})