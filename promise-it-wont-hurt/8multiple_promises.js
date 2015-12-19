var Q = require('q');
var deferred1 = Q.defer();
var deferred2 = Q.defer();

var all = function(f1, f2){
    var internalDeferred = Q.defer();
    var arrayValue = [];
    f1.then(function(value){
        arrayValue.push(value);
        if (arrayValue.length == 2){
            internalDeferred.resolve(arrayValue)
        }
    }).then(null, console.log);
    f2.then(function(value){
        arrayValue.push(value);
        if (arrayValue.length == 2){
            internalDeferred.resolve(arrayValue)
        }
    }).then(null, console.log);
    return internalDeferred.promise;
}

setTimeout(function(){
    deferred1.resolve('PROMISES');
}, 200);

setTimeout(function(){
    deferred2.resolve('FTW')
}, 200);

// solution 1
all(deferred1.promise, deferred2.promise).then(console.log);

// solution 2
//Q.all([
//    deferred1.promise,
//    deferred2.promise
//]).then(console.log);

// solution 3
//Q.spread([
//    deferred1.promise,
//    deferred2.promise
//], console.log).
