import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './routes/user';
import Department from './routes/department';

dotenv.config();

const app = express();

app.use(express.json());

console.log(typeof String(process.env.CORS));

const corsConfig = {
  origin: ["mysql://root:ZD9JXY7ZnhaJxkDjhJvr@containers-us-west-25.railway.app:5703/railway", "http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsConfig));

app.use('/user', User);
app.use('/department', Department);

export default app;
