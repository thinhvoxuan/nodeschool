var q = require('q')
parsePromised = function(value){
    var deferred = q.defer()
    try{
        var outputString = JSON.parse(value)
        deferred.resolve(outputString);
    }catch (e){
        deferred.reject(e)
    }
    return deferred.promise;
};

var input = process.argv[2];
parsePromised(input).then(null, console.log)
