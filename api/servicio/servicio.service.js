const Servicio = require('./servicio.model')
const fs = require('fs');
const path = require('path');

const servicioSer ={}

servicioSer.getServicios=async()=>{
    const servicios = await Servicio.find().populate("especialidad");
    return servicios;
}

servicioSer.getServicio= async(id)=>{
    try {
         const servicio = await Servicio.findById(id).populate("especialidad");
         if(!servicio)
            throw new Error("El servicio no existe");
        return servicio;
    } catch (error) {
          throw new Error("Error Al buscar Servico en BD: "+error)
    }
}

servicioSer.postServicio=async(servicioReq)=>{
    const servicio = new Servicio(servicioReq.body)   
    try{

        if(servicioReq.file){
            const {filename}= servicioReq.file;
            servicio.setImage(filename)
         }

          await servicio.save();
          return servicio;
       }catch(e){
           throw new Error('error al guardar servicio en bd: '+e);
       } 
}

servicioSer.putServicio = async (servicioReq) => {
    const updateData =new Servicio(servicioReq.body);
    try {
        if (servicioReq.file) {
            const { filename } = servicioReq.file;
            updateData.setImage(filename);
        }
        console.log(servicioReq.body)
        
        const servicioModificado = await Servicio.findByIdAndUpdate(servicioReq.body._id, updateData, { new: true });

        return servicioModificado;
    } catch (e) {
        throw new Error('error al guardar servicio en bd: ' + e);
    }
}


servicioSer.deleteServicio=async(id)=>{
     
    try{
        const servicioAEliminar= await Servicio.findById(id);
        const servicioEliminado = await Servicio.deleteOne({_id:id});

        if(!servicioEliminado)
             throw new Error("Servicio no encontrado");

        // Eliminar el archivo de la imagen si existe
       if (servicioAEliminar.image) {
        const imageUrl = servicioAEliminar.image;
        const imageName = imageUrl.split('/').pop();
        const imagePath = path.join(__dirname, '../../storage/img_servicios/', imageName);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('error al eliminar la imagen: ', err);
            }
        });
    }
          return servicioEliminado;
       }catch(e){
           throw new Error('error al guardar servicio en bd: '+e);
       } 
}

servicioSer.getServicioByEspecialidad= async(idEspecialidad)=>{
    try {
         const servicio = await Servicio.findOne({especialidad:idEspecialidad})
         if(!servicio)
            throw new Error("El servicio no existe");
         return servicio;
    } catch (error) {
          throw new Error("Error Al buscar Servico en BD: "+error)
    }
}

module.exports = servicioSer;