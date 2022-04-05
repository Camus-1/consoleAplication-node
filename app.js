const { crearTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs/yargs")

// console.log(argv);

crearTabla(argv.b, argv.l)
    .then((nombreArchivo) => console.log(nombreArchivo, "Creado"))
    .catch((err) => console.log(err));