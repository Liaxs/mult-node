const argv = require('./config/yargv').argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log("===============".green);
                console.log(`Tabla de ${argv.base}`.green);
                console.log("===============".green);
                console.log(resp);

            })
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("Archivo creado:", archivo.green))
            .catch(e => console.log(e))
        break;
    default:
        console.log('No se reconoce comando');
        break;
}
//console.log(argv._[0]);


/*
 */