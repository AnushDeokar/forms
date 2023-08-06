import {Request,Response,Application} from 'express';
import { Router } from 'express';
import jwt, {Secret} from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel, {User} from '../models/user';


const router = Router();

router.post('/register',async (req:Request, res: Response)=>{
    try {
        const {name, email, password} : { name: string; email: string; password: string }  = req.body; 
        const isuser: User | null = await userModel.findOne({email: email});
        if (isuser){
            throw new Error("User Exists");
        }
        const hashedpassword : string= await bcrypt.hash(password, 10);
        const newItem: User = { name, email, password: hashedpassword };
        const user = new userModel(newItem);
        await user.save();
    
        res.status(201).json({ message: 'User inserted successfully', sucess: true, user });
      } catch (error) {
        console.error('Error inserting item:', error);
        res.status(500).json({ error: 'An error occurred while inserting the item' });
      }
})


router.post('/login',async (req:Request, res: Response)=>{
    try {
        const {email, password} : { email: string; password: string } = req.body;
        const isuser: User | null =  await userModel.findOne({email: email});
        if (!isuser){
            res.status(201).json({ message: 'Invalid Email', sucess: false });
        }else{
            const ispasswordmatch : boolean = await bcrypt.compare(password, isuser.password);
            if (ispasswordmatch){
                const token_data :{email: string}= {
                    email: isuser.email
                }
                const jwtSecret: Secret = process.env.JWT_SECRET as string;
                const token: Secret = jwt.sign(token_data, jwtSecret);
                res.status(201).json({ message: 'successfully logged in', auth_token: token, success: true });
            }else{
                res.status(201).json({ message: 'Invalid Credientials', success: false });
            }
        }
        
        
      } catch (error) {
        console.error('Error inserting item:', error);
        res.status(500).json({ error: 'An error occurred while inserting the item' });
      }
})



export default router;