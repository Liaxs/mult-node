const fs = require('fs');

let listarTabla = async(base, limite) => {
    if (!Number(base) || !Number(limite)) {
        //throw new Error('No es un numero');
        return 'No es un numero';
    }
    let data = '';
    for (let i = 0; i <= limite; i++) {
        let producto = base * i;
        let msj = `${base} * ${i} = ${producto} \n`
        data += msj;
    }
    return data;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let producto = base * i;
            let msj = `${base} * ${i} = ${producto} \n`
            data += msj;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);

        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}