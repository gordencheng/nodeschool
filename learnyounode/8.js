var http = require('http');
var url = process.argv[2];

//console.log('GET ' + url);
var buffer = '';
http.get( 
          url, 
          function (response) { 
            response.setEncoding('utf8'); 
            response.on("data", function (data) { 
              buffer += data;
            })
            response.on("end", function () { 
              console.log(buffer.length)
              console.log(buffer)
            })
          }
        ).on(
          "error", 
          function (err) { 
            return console.error(err) 
          }
        );

