const express = require('express');

const router = express.Router();

//todas las rutas de los controllers
router.use('/servicio',require('../api/servicio/routes'));

export default router;