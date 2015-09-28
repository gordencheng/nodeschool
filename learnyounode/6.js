var mymodule = require('./6-lib.js');

var dir = process.argv[2];
var ext_filter = process.argv[3];

mymodule(dir,ext_filter, function (err,data) { if (data) { for (var i = 0; i < data.length; i++) { console.log(data[i]) }  } else console.log(err); });
