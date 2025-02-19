const express = require('express');
const { models } = require('mongoose');

const router = express.Router();

//todas las rutas de los controllers
router.use('/servicio',require ('../api/servicio/routes.js'));
router.use ('/medico', require ('../api/medico/medico.routes.js'));
module.exports= router;