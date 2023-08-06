import mongoose from "mongoose";

export interface User {
    name: string, 
    email: string,
    password: string, 
}

const userSchema = new mongoose.Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
  
const userModel = mongoose.model<User>('User', userSchema);

export default userModel;