import dotenv from 'dotenv';
import express, { Express } from 'express';
import { DEFAULT_HTTP_PORT } from './utils/constants';

dotenv.config();

const app: Express = express();
const port = process.env.HTTP_PORT ?? DEFAULT_HTTP_PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`⚡ App running on http://localhost:${port}`),
);
