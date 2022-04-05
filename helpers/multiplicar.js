const fs = require("fs");

const crearTabla = async(base = 5, listar = false) => {
    try {
        let resultado = "";
        for (let i = 0; i <= 10; i++) {
            resultado += `${base} x ${i} = ${i * base} \n`;
        }
        if (listar == true) {
            console.log('=================');
            console.log(' tabla del:', base);
            console.log('=================');
            console.log(resultado);
        }

        fs.writeFileSync(`tabla-${base}.txt`, resultado);
        return `tabla -${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearTabla,
};