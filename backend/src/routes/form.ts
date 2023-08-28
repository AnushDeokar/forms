import {Request,Response,Application, response} from 'express';
import { Router } from 'express';
import jwt, {Secret} from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel, {User} from '../models/user';
import authverify from '../middleware/authverify';
import formModel from '../models/form';
import { IGetUserAuthInfoRequest } from '../../custom';

const router = Router();

router.post('/create', authverify, async (req: Request, res:Response)=>{
    console.log(req.body);
    try{
        const userid = (req as IGetUserAuthInfoRequest).user_id
        const user: User | null = await userModel.findOne({_id: userid});
        console.log(user?._id);
        const formData = {
            user_id: user?._id,
            title: req.body.title,
            description: req.body.description,
            questions: req.body.questions
        }
        const form  = new formModel(formData);
        form.save();
        res.status(201).json({message:"Form successfully created", success: true});
    }catch (err){
        res.status(201).json({message:err, success: false});
    }

})

export default router;