const express = require('express');
const servicioCtrl = require('./servicio.controller');
const upload = require('../../libs/storage');
const cors = require ('cors');

const router = express.Router();
router.use(cors());

router.get('/',servicioCtrl.getServicios );

router.post("/", upload.single('image') ,servicioCtrl.postServicio);

router.get("/:id",servicioCtrl.getServicio);

router.put("/:id",upload.single('image'),servicioCtrl.putServicio);

router.delete("/:id",servicioCtrl.deleteServicio);

module.exports= router;
