const servicioSer = require('./servicio.service');
const StatusResponse = require('../../utils/statusResponse');
const { json } = require('express');

const servicioCtrl = {};
const statusResopnse= new StatusResponse();

servicioCtrl.getServicios = async (req, res) => {
  try {
     await servicioSer.getServicios().then(servicios=>{
        statusResopnse.sendResponse(res,200,1,servicios,"Lista de servicios")
     })
  
  } catch (error) {
    console.log("Error: "+error);
    statusResopnse.sendResponse(res,500,0,null,"Error al listar Servicios");
  }
};

servicioCtrl.getServicio = async (req, res) => {
  try {
     await servicioSer.getServicio(req.params.id).then(servicio=>{
          statusResopnse.sendResponse(res,200,1,servicio,"Servicio encontrado")
     })
  
  } catch (error) {
    console.log("Error: "+error);
    statusResopnse.sendResponse(res,500,0,null,"Error al buscar, el Servicio no existe");
  }
};

servicioCtrl.postServicio=async (req,res)=>{
    try{
        await servicioSer.postServicio(req).then(servicio=>{
        statusResopnse.sendResponse(res,200,1,servicio,"Servicio Gurdado")
        })    
    }catch(error){
      console.log("Error: "+error)
      statusResopnse.sendResponse(res,500,0,null,"Error al guardar Servicio");
    }
}

servicioCtrl.putServicio=async (req,res)=>{
  try{
      await servicioSer.putServicio(req).then(servicio=>{
      statusResopnse.sendResponse(res,200,1,servicio,"Servicio Modificado")
      })    
  }catch(error){
    console.log("Error: "+error)
    statusResopnse.sendResponse(res,500,0,null,"Error al Modificar, el Servicio no existe");
  }
}

servicioCtrl.deleteServicio=async (req,res)=>{
  try{
      await servicioSer.deleteServicio(req.params.id).then(servicio=>{
      statusResopnse.sendResponse(res,200,1,servicio,"Servicio Eliminado")
      })    
  }catch(error){
    console.log("Error: "+error)
    statusResopnse.sendResponse(res,500,0,null,"Error al eliminar, el Servicio no existe");
  }
}

module.exports = servicioCtrl;
