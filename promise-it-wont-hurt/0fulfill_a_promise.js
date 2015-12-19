var q = require('q');
var deferred = q.defer();
setTimeout(function(){
    deferred.resolve('RESOLVED!');
}, 300);
deferred.promise.then(function(str){
    console.log(str);
});
