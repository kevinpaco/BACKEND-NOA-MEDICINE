const mongoose = require('mongoose')

const {Schema} = mongoose;

const ServicioSchema = new Schema({
    nombre:{type:String, required:true},
    precio:{type:Number, required:true},
    descripcion:{type:String, required:true},
    image:{type:String, required:false},
    especialidad:{type:mongoose.Schema.Types.ObjectId, ref:'Especialidad', required:true}
})

ServicioSchema.methods.setImage = function setImage(filename){
    this.image = `http://localhost:3000/public/${filename}`;
    console.log("asigno ruta  a la imagen")
}

module.exports= mongoose.model.Servicio || mongoose.model('Servicio',ServicioSchema);