const StatusResponse = require('../../utils/statusResponse');
const especialidadSer = require('./especialidad.service')

const especialidadCtrl = {}
const statusResonse =new StatusResponse();

especialidadCtrl.postEspecialidad= async (req,res)=>{
    try {
           await especialidadSer.postEspecialidad(req).then( especialidad=>{
            statusResonse.sendResponse(res,200,1,especialidad,"Especialidad Guardada")
           })
    } catch (error) {
      console.log("Error: "+error)
      statusResonse.sendResponse(res,500,0,null,"error al guardar especialidad")
     }
}

especialidadCtrl.getEspecialidades=async (req,res)=>{
   try {
         especialidadSer.getEspecialidades().then(especialidades=>{
            statusResonse.sendResponse(res,200,1,especialidades,'especialidades encontradas')
         });
    } catch (error) {
      console.log("Error: "+error);
      statusResonse.sendResponse(res,500,0,null,"error al buscar todas las especialidades")
  }
}

especialidadCtrl.getEspecialidadById= async (req,res)=>{
   try {
         especialidadSer.getEspecialidadById(req.params.id).then(
            especialidad=>{
                  statusResonse.sendResponse(res,200,1,especialidad,"especialidad encontrada");
            }   
         )
    } catch (error) {
      console.log("Error: "+error)
      statusResonse.sendResponse(res,500,0,null,"error al buscar una especialidad")
  }
}

especialidadCtrl.deleteEspecialidad= async (req,res)=>{
   try {
         especialidadSer.deleteEspecialidad(req.params.id).then(
            especialidad=>{
                  statusResonse.sendResponse(res,200,1,especialidad,"especialidad eliminada");
            }   
         )
    } catch (error) {
      console.log("Error: "+error)
      statusResonse.sendResponse(res,500,0,null,"error al eliminar una especialidad")
  }
}



module.exports = especialidadCtrl;