const medicoCtrl = require ('./medico.controller.js');
const express = require ('express');
const router = express.Router();

router.post ('/', medicoCtrl.createMedico);
router.get ('/', medicoCtrl.getMedicos);
router.get ('/:id', medicoCtrl.getMedico);
router.delete ('/:id', medicoCtrl.deleteMedico);
router.put ('/:id', medicoCtrl.updateMedico);
module.exports = router