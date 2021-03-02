
const argv = require('yargs')
    .command('crear','Crea una tarea por hacer', {
        descripcion:{
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv,
}