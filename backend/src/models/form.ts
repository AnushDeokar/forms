import mongoose from "mongoose";

interface question{
    question: string,
    options: {number: Number, option: string}
}

export interface Form {
    questions: question[], 
}

const formSchema = new mongoose.Schema<Form>({
    questions: {required: true}
});
  
const formModel = mongoose.model<Form>('Form', formSchema);

export default formModel;