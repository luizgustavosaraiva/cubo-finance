import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.HTTP_PORT ?? 5000;
const https_port = process.env.HTTP_PORT ?? 5001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`⚡ App running on port ${port}`));
