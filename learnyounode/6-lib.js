module.exports = function (dir, ext, callback) {

var fs = require('fs');
var path = require('path');

fs.readdir(dir, function (err,list) {
if (err)
  return callback(err);
var filtered_list = [];
  for (var i = 0, j=0; i < list.length; i++)
  {
    if (path.extname(list[i]) == "."+ext)
    {
      filtered_list[j] = list[i];
      j++;
    }
  }
  return callback(null, filtered_list);
});

}
