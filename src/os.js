const os = require('os')


console.log(os.freemem());
console.log(os.networkInterfaces());
console.log(os.hostname);
console.log(os.networkInterfaces()['Wi-Fi'][0].mac);
console.log(os.homedir());
console.log();