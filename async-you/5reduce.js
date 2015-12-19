/**
 * Created by thinhvoxuan on 12/20/15.
 */
var http = require('http')
    , async = require('async');

var url = process.argv[2];
var data = ['one', 'two', 'three'];
async.reduce(data, 0, function(memo, item, callback){
    var link = url + '?number=' + item;
    fetchData(link, function(err, result){
        var intValue = parseInt(result);
        callback(null, memo + intValue);
    });
}, function(err, result){
    console.log(result);
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