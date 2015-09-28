var http = require('http');
var urls = [ process.argv[2], process.argv[3], process.argv[4] ];

var pending = urls.length;
var total = [];

for (var i = 0; i < pending; i++) {
  setImmediate(function(j){
    http.get(
      urls[j], 
      function (response) { 
        var buffer;

        response.setEncoding('utf8'); 
        response.on("data", function (data) { 
          buffer += data;
        })
        response.on("end", function () { 
          total[j] = buffer.replace('undefined', '');
          //console.log('beforepend = ' + buffer + ' <END>');
          if (--pending == 0) {
            //console.log('pend=0 = ' + buffer + ' <END>');
            for (var k = 0; k < total.length; k++) {
              console.log(total[k]);
            }
          }
        })
        response.on("error", function (err) { 
          console.error(err) 
        })
      }
    )
  }, i);
}
