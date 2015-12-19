/**
 * Created by thinhvoxuan on 12/20/15.
 */
var http = require('http')
    , async = require('async')
async.series({
    requestOne: function(callback){
        var link = process.argv[2];
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
    },
    requestTwo: function(callback){
        var link = process.argv[3];
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
}, function(err, results){
    console.log(results);
});
