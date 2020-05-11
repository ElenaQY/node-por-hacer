const argv = require('./config/yargs.js').argv,
    colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer.js');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('======POR HACER ============'.yellow);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('============================'.yellow);
        }
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log('Se ha actualizado ', actualizado);
        console.log('Actualiza una tarea por hacer');
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(`Se ha borrado: ${borrado}`);
        break;

    default:
        console.log('Comando no conocido');
}