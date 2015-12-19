/**
 * Created by thinhvoxuan on 12/20/15.
 */
var http = require('http')
    , async = require('async')

var arrayLink = [process.argv[2], process.argv[3]];
async.map(arrayLink, function(eachLink, callback){
    fetchData(eachLink, callback)
}, function(err, data){
    console.log(data);
});


function fetchData(link, callback){
    var body = '';
    http.get(link, function(res){
        res.on('data', function(chunk){
            body += chunk.toString();
        });
        res.on('end', function(){
            callback(null, body);
        });
    }).on('error', function(err) {
        callback(err);
    });
}