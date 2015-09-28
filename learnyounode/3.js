var fs = require('fs');

var infile = fs.readFileSync(process.argv[2]);

var str = infile.toString();

var array = str.split('\n');

console.log(array.length - 1);
