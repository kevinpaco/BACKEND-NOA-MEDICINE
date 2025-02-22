const mongoose = require('mongoose');

const {Schema} = mongoose;

const EspecialidadSchema = new Schema({
    nombre:{type:String, required:true},
  //  servicio:{type:mongoose.Schema.Types.ObjectId, red: 'Servicio'}
})

module.exports = mongoose.model.Especialidad || mongoose.model('Especialidad',EspecialidadSchema) 

