import express from 'express';
import  charactersRoute from './routes/charactersRoute.js';

const app = express();

app.use(express.json());
app.use('/characters', charactersRoute);

export default app;