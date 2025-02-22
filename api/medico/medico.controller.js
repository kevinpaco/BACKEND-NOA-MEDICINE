const Medico= require ('./medico.model.js')
const medicoCtrl = {}

medicoCtrl.createMedico=async (req, res)=>{
    const medico = new Medico (req.body);
    try{
        await medico.save();
        res.status(200).json ({
            'status': '1',
            'msg': 'Medico registrado',
            'data': medico
        })
    }
    catch (error){
        console.error ('Hubo un error al intentar procesar la operacion CREAR_MEDICO', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al registrar al medico'
        })
    }
}
medicoCtrl.getMedicos =async (req, res)=>{
    try{
        const medicos = await Medico.find();
        res.status(200).json ({
            'status': '1',
            'msg': 'Se ha logrado obtener la lista de medicos con exito',
            'data': medicos
        })

    }
    catch (error) {
        console.error ('Hubo un error al intentar procesar la operacion OBTENER_MEDICOS', error);
        res.status (400).json({
            'status': '0',
            'msg': 'Error al obtener la lista de medicos'
        })
    }

}
medicoCtrl.getMedico= async (req, res)=>{
    try{
        const medicoBuscado = await Medico.findById(req.params.id);
        if(!medicoBuscado){
            res.status (400).json({
                'status': '0',
                'msg': 'No se pudo encontrar el medico buscado'
            })
        }
        else{
            res.status(200).json({
                'status': '1',
                'msg': 'Se pudo encontrar el medico buscado con exito',
                'data': medicoBuscado
            })
        }
    }
    catch (error){
        console.error ('No se pudo efectuar la operacion OBTENER_MEDICO', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al buscar un medico'
        })
    }
}
medicoCtrl.updateMedico =async (req, res)=>{
    try{
        const medicoModificado= await Medico.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!medicoModificado){
            res.status(400).json({
                'status': '0',
                'msg': 'Medico no encontrado'
            })
        }
        else{
            res.status(200).json({
                'status': '1',
                'msg': 'Medico encontrado y modificado con exito',
                // 'data': medicoModificado
            })
        }
    }
    catch (error){
        console.error ('No se pudo efectuar la operacion MODIFICAR_MEDICO', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al modificar un medico'
        })
    }
}
medicoCtrl.deleteMedico= async (req, res)=>{
    try{
        const medicoEliminado= await Medico.deleteOne({_id: req.params.id});
        if (!medicoEliminado){
            res.status (400).json ({
                'status':'0',
                'msg': 'Medico no encontrado'
            })
        }
        else{
            res.status(200).json ({
                'status': '1',
                'msg': 'Medico eliminado con exito'
            })
        }
    }
    catch (error){
        console.error ('No se pudo efectuar la operacion ELIMINAR MEDICO', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al buscar un medico'
        })

    }
}
module.exports = medicoCtrl;