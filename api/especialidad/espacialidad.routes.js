const especialidadCtrl = require('./especialidad.controller.js')
const express = require('express');

const router = express.Router();

router.post("/",especialidadCtrl.postEspecialidad);
router.get ('/', especialidadCtrl.getEspecialidades);
router.get ('/:id', especialidadCtrl.getEspecialidadById);
router.delete("/:id",especialidadCtrl.deleteEspecialidad);

module.exports = router;