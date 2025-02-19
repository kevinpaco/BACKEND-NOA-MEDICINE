const Paciente = require('./paciente.model');

const pacienteCtrl={}
pacienteCtrl.createPaciente= async (req, res)=>{
    const paciente= new Paciente (req.body);
    try {
        await paciente.save();
        res.status (200).json ({
            'status': '1',
            'msg': 'Paciente registrado con exito',
            'data': paciente
        });
    } catch (error){
        console.error('Hubo un error al crear la paciente', error);
        res.status (400).json ({
            'status': '0',
            'msg': 'Error al procesar crear paciente'
        });
    }
}
pacienteCtrl.getPaciente = async (req, res)=>{
    try{
        const pacienteBuscada= await Paciente.findById(req.params.id)
        if (!pacienteBuscada){
            res.status (400).json ({
                'status': '0',
                'msg': 'No se encontro la paciente buscada'
            })
        }
        else{
            res.status (200).json ({
                'status': '1',
                'msg': 'paciente encontrada con exito',
                'data': pacienteBuscada
            })
        }
    }
    catch (error){
        console.error ('Error al procesar obtener paciente', error);
        res.status(400).json ({
            'status':'0',
            'msg': 'Error al procesar la operacion '
        })
    }
}
pacienteCtrl.getPacientes= async (req, res)=>{
    try {
        const pacientes= await Paciente.find();
        res.status (200).json({
            'status': '1',
            'msg': 'Pacientes encontradas',
            'data': pacientes
        })
    }
    catch (error){
        console.error ('Hubo un error al intentar obtener el listado de pacientes', error);
        res.status (400).json({
            'status': '0',
            'msg':'Hubo error al procesar la operacion'
        })
    }
}
pacienteCtrl.updatePaciente= async (req, res)=>{
    try {
        const paciente= await Paciente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!paciente){
            res.status(400).json ({
                'status': '0',
                'msg': 'paciente no encontrada'
            })
        }
        else {
            res.status(200).json({
                'status': '1',
                'msg': 'Informacion de paciente actualizada con exito',
                'data': paciente
            })
        }
    }
    catch (error){
        console.error('Hubo un error al actualizar paciente', error);
        res.status (400).json ({
            'status': '0',
            'msg': 'Error al procesar actualizar la informacion de paciente'
        });

    }
}
pacienteCtrl.deletePaciente= async (req, res)=>{
    try{
        const paciente = await Paciente.deleteOne({_id: req.params.id});
        if (!paciente){
            res.status(400).json({
                'status':'0',
                'msg': 'No se encontro la paciente que se desea eliminar'
            })
        }
        else{
            res.status(200).json({
                'status': '1',
                'msg': 'paciente eliminada con exito'
            })
        }
    }
    catch(error){
        console.error('Hubo un error al procesar eliminar paciente', error);
        res.status (400).json ({
            'status': '0',
            'msg': 'Error al procesar eliminar paciente'
        });
    }
}

module.exports= pacienteCtrl;