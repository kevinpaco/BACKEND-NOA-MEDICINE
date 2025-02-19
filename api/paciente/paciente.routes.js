const pacienteCtrl = require ('./paciente.controller.js');
const express = require ('express');
const router = express.Router();

router.post ('/', pacienteCtrl.createPaciente);
router.get ('/:id', pacienteCtrl.getPaciente);
router.get ('/', pacienteCtrl.getPacientes);
router.put ('/:id', pacienteCtrl.updatePaciente);
router.delete ('/:id', pacienteCtrl.deletePaciente);

module.exports = router