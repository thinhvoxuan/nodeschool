function askFoo () {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run (generator) {
    var callback = function(value){
        console.log(value);
    };
    var it = generator();
    var promise = it.next();
    promise.value.then(callback);

}

run(function* () {
    // improve: errors?
    var foo = yield askFoo();
    console.log(foo);
});