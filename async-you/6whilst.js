/**
 * Created by thinhvoxuan on 12/20/15.
 */
var http = require('http')
    , async = require('async');

var url = process.argv[2];
var body = '';
var count = 0;

async.whilst(function(){
    return !/meerkat/.test(body.trim());
}, function(cb){
    count++;
    fetchData(process.argv[2], function(err, data){
        body = ''+data;
        cb(null, count);
    });
}, function(err, n){
    console.log(count);
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