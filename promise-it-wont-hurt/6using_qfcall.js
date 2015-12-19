var Q = require('q')

var input = process.argv[2];
Q.fcall(JSON.parse, input).then(console.log, console.log);
