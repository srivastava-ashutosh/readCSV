var fs = require('fs');

var csv = require('fast-csv');


var ws = fs.createReadStream('my.csv')
.pipe(csv())
.on('data',function(data){
console.log(data);
})
.on('end',function(data){
console.log("read finish");
});
