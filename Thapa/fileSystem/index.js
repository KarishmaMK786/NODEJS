const fs = require('fs');

//  Creating New File
fs.writeFileSync('read.txt', "Welcome to the Node Project");

fs.writeFileSync('read.txt', "Override first code, Welcome to the Node Project");

fs.appendFileSync('read.txt', " New Data Added");


const buf_data = fs.readFileSync('read.txt');
const org_data = buf_data.toString();
console.log(org_data);


fs.renameSync('read.txt', 'readwrite.txt');






