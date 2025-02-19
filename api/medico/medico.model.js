const mongoose= require('mongoose');
const Persona = require('../persona/persona.model');

let MedicoSchema = new mongoose.Schema ({
    ...Persona.schema.obj,
    especialidad_medica: {type: String, required: true},
    sueldo: {type: Number},

})

module.exports = mongoose.models.Medico || mongoose.model ('Medico', MedicoSchema)