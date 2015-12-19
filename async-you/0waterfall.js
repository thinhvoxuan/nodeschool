/**
 * Created by thinhvoxuan on 12/20/15.
 */

var http = require('http')
    , async = require('async')
    , fs = require('fs');
async.waterfall([
    function(callback){
        var pathFile = process.argv[2];
        fs.readFile(pathFile, 'utf-8', function(err, data){
            callback(null, data);
        });
    }, function(link, callback){
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
], function(err, result){
    console.log(result);
})