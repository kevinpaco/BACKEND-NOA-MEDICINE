const express = require('express');
const cors = require ('cors')
const router = express.Router();

router.use(cors());

//todas las rutas de los controllers
router.use('/servicio',require ('../api/servicio/servicio.routes.js'));
router.use('/paquete',require('../api/paquete/paquete.routes.js'))
router.use('/especialidad', require ('../api/especialidad/espacialidad.routes.js'))

router.use ('/medico', require ('../api/medico/medico.routes.js'));
router.use ('/paciente', require ('../api/paciente/paciente.routes.js'));
module.exports= router;