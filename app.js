const express = require ('express')
const cors = require ('cors');
const routes = require ('./routes/index.js')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json())

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, parameterLimit:50000,limit:"50mb"}))
//const upload = multer({ limits: { fileSize: 50 * 1024 * 1024 } }); 

app.use('/api',routes);
app.use('/public',express.static(`${__dirname}/storage/img_servicios`));//para obtener las imagenes de los servicios

module.exports= app;