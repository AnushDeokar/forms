import mongoose, { Schema, Document } from "mongoose";

interface Option {
    number: number,
    option: string
}

interface Question {
    question: string,
    options: Option[]
}

export interface Form extends Document {
    title: string,
    questions: Question[],
    description: string,
    createdAt: Date,
    user_id : mongoose.Types.ObjectId
}

const formSchema = new Schema<Form>({
    questions: [
        {
            type: { type: String, enum: ['MCQ', 'SA', 'Dropdown'], required: true },
            text: { type: String, required: true },
            options: { type: [String] }
        }
    ],
    title: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});


const formModel = mongoose.model<Form>('Form', formSchema);

export default formModel;