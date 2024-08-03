const { log } = require('console');
const os = require('os')

const user = os.userInfo();

console.log(`the system time is ${os.uptime()}`);

const currOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currOS);
 