import mongoose, {ConnectOptions} from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost:27017/formsdb', {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};