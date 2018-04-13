const yargs = require("yargs");

// const handler = require("./request_callback/handler");
// const handler = require("./request_promises/handler");
// const handler = require("./axios_promises/handler");
const handler = require("./axios_async_await/handler");

let argv = yargs.option('address', {
    alias: 'a',
    describe: 'write down your address',
    required: true
  })
  .help()
  .argv;

let encodedAddress = encodeURIComponent(argv.address);

handler.printTemperatureAtLocation(encodedAddress);
