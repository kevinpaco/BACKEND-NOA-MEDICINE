const express = require ('express')
const cors = require ('cors');
const routes = require ('./routes/index.js')
const app = express();

app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api',routes);

module.exports= app;