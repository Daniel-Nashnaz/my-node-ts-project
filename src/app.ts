import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', router);

export default app;
