const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
    })
    .option("l", {
        alias: "list",
        type: "boolean",
        demandOption: false,
        default: false,
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base debe ser un numero";
        }
        return true;
    }).argv;

module.exports = argv;