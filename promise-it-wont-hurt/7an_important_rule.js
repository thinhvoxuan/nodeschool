/**
 * Created by thinhvoxuan on 12/19/15.
 */
var throwMyGod = function(){
    throw new Error('OH NOES')
}
var iterate = function(x){
    console.log(x);
    return x + 1;
}

var Q = require('q')
Q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(throwMyGod)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log)

;