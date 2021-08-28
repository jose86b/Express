import db from "../database/index";

// Mostrar Tarea _______________________________________
const actualizarTarea = async (req, res) => {
    try {
        const results = await db.user.findAll();
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
}


// Insertar Tarea __________________________________________________

const agregarTarea = async (req, res) => {
    try {
        let user = req.body;
        await db.user.create(
            user
        );
        res.status(200).send(
            {
                message:"Creada"
            }
        );
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        )
    }
}
// Eliminar Tarea _______________________________________
const eliminarTarea = async (req, res) => {
    try {

        await db.user.destroy(
           
            {
                where: { id: req.params.id },
            }
        );
        res.status(200).send({message: "Ok"});
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        );
    }
}

// Editar Tarea _______________________________________
const editarTarea = async (req, res) => {
    try {
        let user = req.body;
        await db.user.update(
            user,
            {
                where:{ id: req.params.id},
            }
        );
        res.status(200).send(
            {
                message:"Actualziado correctamente"
            }
        )
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        );
    }
}

export {    
    editarTarea,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
};