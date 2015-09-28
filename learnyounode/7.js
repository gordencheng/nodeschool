var http = require('http');
var url = process.argv[2];

//console.log('GET ' + url);
http.get( 
          url, 
          function (response) { 
            response.setEncoding('utf8'); 
            response.on("data", function (data) { 
              console.log(data)
            })
          }
        ).on(
          "error", 
          function (err) { 
            return console.error(err) 
          }
        );

