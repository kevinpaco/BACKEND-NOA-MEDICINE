const Especialidad = require('./espacialidad.model');
const ServicioSer = require('../servicio/servicio.service')

const especialidadSer ={}

especialidadSer.postEspecialidad=async(req)=>{
    const especialidad = new Especialidad(req.body);
    try {
         await especialidad.save();
      return especialidad;
        } catch (error) {
        throw new Error('error al guardar especialidad en db: '+error);
    }
}

especialidadSer.getEspecialidades=async()=>{
    try {
          const especialidades = await Especialidad.find();
          return especialidades;
    } catch (error) {
        throw new Error('error al buscar todas las especialidades: '+error);
    }
}

especialidadSer.getEspecialidadById=async(id)=>{
    try {
          const especialidad = await Especialidad.findById(id);
          if(!especialidad)
               throw new Error("Especialidad no exite");
          return especialidad;
    } catch (error) {
        throw new Error('error al buscar especialidad por Id: '+error);
    }
}

especialidadSer.deleteEspecialidad=async(id)=>{
    try {
          await eliminarServicioRelacionado(id);
          
          const especialidadEliminada = await Especialidad.deleteOne({_id:id}); 

          return especialidadEliminada;
    } catch (error) {
        throw new Error('error al eliminar especialidad por Id: '+error);
    }
}

async function eliminarServicioRelacionado(idEspecialidad) {
    try {
        const servicio = await ServicioSer.getServicioByEspecialidad(idEspecialidad)
        if (servicio) {
            await ServicioSer.deleteServicio(servicio._id);
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = especialidadSer;