const yargs = require("yargs");

/*
*
* ALL FOUR HANDLERS GIVES THE SAME RESULT,
* ONLY DIFFRENCE IS THER WAY TO HANDLE DATA
* (LIKE CALLBACKS/PROMISES/ASYNC_AND_AWAIT)
*
*/
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
