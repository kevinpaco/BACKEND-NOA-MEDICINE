const mongoose= require ('mongoose');

let PersonaSchema= new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    dni:  {type: Number, required: true, unique: true},
    fecha_nac: {type: Date, required: true },
    email: {type: String},
    telefono: {type: String, required: true},
    direccion: {type: String, required: false}
})
module.exports =mongoose.models.Persona || mongoose.model('Persona', PersonaSchema)