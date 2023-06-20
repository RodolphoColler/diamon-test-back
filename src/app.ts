import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const corsConfig = {
  origin: ['http://localhost:3000', 'https://blizter.vercel.app'],
  credentials: true,
};

app.use(cors(corsConfig));

// app.use('/user', router.user);

export default app;
