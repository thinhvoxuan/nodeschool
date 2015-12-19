var q = require('q')
var deferred = q.defer()
attachTitle = function(name){
    return 'DR. '+ name
}
deferred.promise.then(attachTitle).then(console.log)
deferred.resolve('MANHATTAN')