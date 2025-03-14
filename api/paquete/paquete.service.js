const Paquete = require('./paquete.model')

const paqueteService ={}

paqueteService.getPaquetes=async()=>{
   
    const paquetes = await Paquete.find().populate('servicios');
    return paquetes;
}

paqueteService.getPaquete=async(id)=>{
   
    try{
        const paquete = await Paquete.findById(id).populate('servicios');
        if(!paquete){
           throw new Error("El paquete no existe");
        }
        return paquete;
    }catch(e){
    throw new Error("Error al buscar el paquete: "+e);
    }     
}

paqueteService.postPaquete=async(paqueteReq)=>{
   const paquete = new Paquete(paqueteReq.body);
   try{
         await paquete.save();
         return paquete;
   }catch(e){
     throw new Error("Error al guardar el Paquete: "+e);
   }
}

paqueteService.putPaquete=async(paqueteReq)=>{
    const paqueteUpdate = new Paquete(paqueteReq.body);
    try{
          const paquete = await Paquete.findByIdAndUpdate(paqueteReq.body._id,paqueteUpdate,{new : true});
          return paquete;
    }catch(e){
      throw new Error("Error al modificar el Paquete: "+e);
    }
 }

 paqueteService.addServicioAPaquete=async(paqueteReq)=>{
  try{
        const paqueteBuscado = await Paquete.findById(paqueteReq.params.id);
        if(!paqueteBuscado)
             throw new Error('paquete no encontrado');
        paqueteReq.body.servicios.forEach(serivicoId => {
          paqueteBuscado.servicios.push(serivicoId);
        });
        const paqueteActualizado = await paqueteBuscado.save();
        return paqueteActualizado;
  }catch(e){
    throw new Error("Error al modificar el Paquete: "+e);
  }
}

paqueteService.removeServicioAPaquete=async(paqueteReq)=>{
   try{
         const paqueteBuscado = await Paquete.findById(paqueteReq.params.id);
         if(!paqueteBuscado)
              throw new Error('paquete no encontrado');
         paqueteReq.body.servicios.forEach(serivicoId => {
           paqueteBuscado.servicios.remove(serivicoId);
         });
         const paqueteActualizado = await paqueteBuscado.save();
         return paqueteActualizado;
   }catch(e){
     throw new Error("Error al modificar el Paquete: "+e);
   }
 }

 paqueteService.deletePaquete=async(id)=>{
      try{
          const paqueteEliminado= await Paquete.deleteOne({_id:id});
          return paqueteEliminado;
      }catch(e){
        throw new Error("Error al aliminar paquete: "+e);
      }
}
 

module.exports = paqueteService;

