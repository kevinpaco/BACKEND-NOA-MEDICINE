const mongoose = require ("mongoose");

const {Schema} = mongoose;

const PaqueteSchema = new Schema({
     nombre:{type:String, required:true},
     descripcion:{type:String, required:true},
     precio:{type:Number, required:true},
     servicios:[{type:mongoose.Schema.ObjectId,required:true}],
})

module.exports = mongoose.model.PaqueteSchema || mongoose.model("Paquete",PaqueteSchema);