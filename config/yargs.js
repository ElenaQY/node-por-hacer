const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea obligatoria'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado/pendiente una tarea'
}

const optDesc = {
    descripcion
}

const optActualizar = {
    descripcion,
    completado
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', optDesc)
    .command('borrar', 'borrar un elemento por hacer', optDesc)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optActualizar)
    //.command('listar', 'Añadir una tarea para hacer a la lista', opt)
    .help()
    .argv;

module.exports = {
    argv
}