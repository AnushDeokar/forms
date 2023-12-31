import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    name: string,
    email: string,
    password: string,
}

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const userModel = mongoose.model<User>('User', userSchema);

export default userModel;
