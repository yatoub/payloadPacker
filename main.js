const payload = './bin/payload'

var child = require('child_process').execFile;
var executablePath = payload;

child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
    console.log(data.toString());
});