const yargs = require("yargs");

const handler = require("./request_callback/handler");

let argv = yargs.option('address', {
    alias: 'a',
    describe: 'write down your address',
    required: true
  })
  .help()
  .argv;

let encodedAddress = encodeURIComponent(argv.address);

handler.printTemperatureAtLocation(encodedAddress);
