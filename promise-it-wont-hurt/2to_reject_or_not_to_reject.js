var q = require('q');
var deferred = q.defer();
deferred.promise.then(function(str){
    console.log(str);
}, function(err){
    console.log(err);
});

setTimeout(function(){
    deferred.resolve('I FIRED');
}, 100);

setTimeout(function(){
    deferred.reject('I DID NOT FIRE')
}, 300)
