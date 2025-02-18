import express from 'express';

const app = express();

app.use(express.json())

app.use('/api',require('./routes/index.js'))

export default app;