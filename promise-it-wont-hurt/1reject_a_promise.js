var q = require('q');
var deferred = q.defer();
setTimeout(function(){
    deferred.reject('REJECTED!');
}, 300);
deferred.promise.then(function(str){
    console.log('Not this case!!');
}, function(err){
    console.log(err);
});
