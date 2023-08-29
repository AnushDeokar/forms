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
    try{
        const userid = (req as IGetUserAuthInfoRequest).user_id
        const user: User | null = await userModel.findOne({_id: userid});
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

router.get('/all', authverify,async (req: Request, res:Response)=>{
    try{
        const userid = (req as IGetUserAuthInfoRequest).user_id
        const forms = await formModel.find({ user_id: userid }).sort({ created_at: 1 });
        res.status(201).json({
            message: "Successfully fetched!",
            forms: forms,
            success: true
        })
    }catch (err){
        res.status(201).json({message:err, success: false});
    }
})

router.get('/edit/:id', authverify,async (req: Request, res:Response)=>{
    try{
        const id = req.params.id;
        const form = await formModel.findById(id);
        res.status(201).json({
            message: "Successfully fetched!",
            form: form,
            success: true
        })
    }catch (err){
        res.status(201).json({message:err, success: false});
    }
})

router.put('/edit/:id', authverify, async (req, res) => {
    try {
        const id = req.params.id;
        const newForm = req.body;
        const updatedForm = await formModel.findByIdAndUpdate(id, newForm, { new: true });

        if (!updatedForm) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.status(201).json({message:"Form Edited created", success: true});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


export default router;