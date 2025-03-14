const paqueteService = require('./paquete.service')
const StatusResponse = require('../../utils/statusResponse');

const paqueteController={}
const statusResponse = new StatusResponse();


paqueteController.getPaquetes=async(req,res)=>{
   try{
         await paqueteService.getPaquetes().then(paquetes=>{
            statusResponse.sendResponse(res,200,1,paquetes,"Lista de paquetes")
         })
         
   }catch(e){
    console.log("Error: "+e);
    statusResponse.sendResponse(res,500,0,null,"Error al lista Paquetes")
   }
}

paqueteController.postPaquete=async(req,res)=>{
    try{
        await paqueteService.postPaquete(req).then(paquete=>{
          statusResponse.sendResponse(res,200,1,paquete,"Paquete guardado")
        })
    }catch(e){
        console.log("Error: "+e);
        statusResponse.sendResponse(res,500,0,null,"Error al guardar Paquete")
    }
 }

 paqueteController.putPaquetes=async(req,res)=>{
    try{
        await paqueteService.putPaquete(req).then(paquete=>{
            statusResponse.sendResponse(res,200,1,paquete,"Paquete Modificado")
        })
    }catch(e){
        console.log("Error: "+e);
        statusResponse.sendResponse(res,500,0,null,"Error al actualizar Paquete")
    }
 }

 paqueteController.addServicioAPaquetes=async(req,res)=>{
    try{
        await paqueteService.addServicioAPaquete(req).then(paquete=>{
            statusResponse.sendResponse(res,200,1,paquete,"Servicio añadido a paquete")
        })
    }catch(e){
        console.log("Error: "+e);
        statusResponse.sendResponse(res,500,0,null,"Error al añadir servicio a Paquete")
    }
 }

 paqueteController.removeServicioAPaquetes=async(req,res)=>{
    try{
        await paqueteService.removeServicioAPaquete(req).then(paquete=>{
            statusResponse.sendResponse(res,200,1,paquete,"Servicio removido de paquete")
        })
    }catch(e){
        console.log("Error: "+e);
        statusResponse.sendResponse(res,500,0,null,"Error al remover servicio de Paquete")
    }
 }

 paqueteController.getPaquete=async(req,res)=>{
    try{
       await paqueteService.getPaquete(req.params.id).then(paquete=>{
        statusResponse.sendResponse(res,200,1,paquete,"Paquete encontrado");
       })
    }catch(e){
        console.log("Error: "+e);
        statusResponse.sendResponse(res,500,0,null,"Error al buscar Paquete")
    }
 }

 paqueteController.deletePaquete=async(req,res)=>{
    try{
       await paqueteService.deletePaquete(req.params.id).then(paquete=>{
        statusResponse.sendResponse(res,200,1,paquete,"Paquete eliminado")
       })
    }catch(e){
        console.log("Error: "+e);
        statusResponse.sendResponse(res,500,0,null,"Error al eliminar Paquetes")
    }
 }

 module.exports = paqueteController;