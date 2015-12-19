/**
 * Created by thinhvoxuan on 12/20/15.
 */
var http = require('http')
    , async = require('async')
    querystring = require('querystring');

var hostname = process.argv[2];
var port = process.argv[3];

createUser = function(n, callback){
    var body = '';
    var req = http.request({
        hostname: hostname,
        port: port,
        path: '/users/create',
        method: 'POST'
    }, function(res){
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            callback(null, body);
        })
    }).on('error', function(err) {
        callback('err: ', err);
    });
    var postData = JSON.stringify({"user_id": n+1});
    req.write(postData);
    req.end();
};

async.times(5, function(n, next){
    createUser(n, function(err, user) {
        next(err, user)
    })
}, function(err, users) {
    var url = 'http://' + hostname + ':' + port + '/users';
    fetchData(url, function(err, result){
        console.log(result);
    })
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

