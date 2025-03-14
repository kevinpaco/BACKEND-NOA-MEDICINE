const express = require('express');
const paqueteCtrl = require('./paquete.controller');

const router = express.Router();

router.get('/',paqueteCtrl.getPaquetes);
router.post('/',paqueteCtrl.postPaquete);
router.get('/:id',paqueteCtrl.getPaquete);
router.put('/',paqueteCtrl.putPaquetes);
router.patch('/:id',paqueteCtrl.addServicioAPaquetes);
router.patch('/remove/:id',paqueteCtrl.removeServicioAPaquetes);
router.delete('/:id',paqueteCtrl.deletePaquete);

module.exports = router;