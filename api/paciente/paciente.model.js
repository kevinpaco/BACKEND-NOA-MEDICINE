const mongoose= require ('mongoose');
const Persona = require ('../persona/persona.model.js')
let PacienteSchema= new mongoose.Schema ({
    ...Persona.schema.obj,
    obra_social: {type: Boolean, required: true},
})

module.exports = mongoose.models.Paciente || mongoose.model ('Paciente', PacienteSchema);