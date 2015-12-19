/**
 * Created by thinhvoxuan on 12/20/15.
 */
var HTTP = require("q-io/http");
HTTP.read('http://localhost:1337').then(function(value){
    return JSON.parse(value);
}).then(console.log, console.log);