import express, {Request,Response,Application} from 'express';
import authRouter from './routes/auth';
import { connectToDatabase } from './db';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

const app:Application = express();
const PORT = process.env.PORT || 8000;


app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
dotenv.config();



app.use('/auth', authRouter);
app.use(express.json());



connectToDatabase()
  .then(() => {
    // Start your server here once the connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
});

