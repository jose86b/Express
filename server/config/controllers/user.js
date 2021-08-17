const mostrarUsuarios = async (req, res) =>{
    console.log("hola Mundo")
    res.status(200).send({
        message: 'hola mundo'
    });
}
const insterarUsuarios = async (req, res) =>{
    console.log("Estas intsertando un usario")
    res.status(200).send({
        message: 'Estas intsertando un usario'
    });
}
const actualizarUsuarios = async (req, res) =>{
    console.log("Esta actualizado el usuario")
    res.status(200).send({
        message: 'Esta actualizado el usuario'
    });
}
const eliminarUsuarios = async (req, res) =>{
    console.log("Estas Eliminado un usuario")
    res.status(200).send({
        message: 'Estas Eliminado un usuario'
    });
}
export{
    mostrarUsuarios,
    insterarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios
}