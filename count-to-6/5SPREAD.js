var args = process.argv.slice(2);
var minFunction = function(...value){
    var min = 10000;
    value.forEach((x) => {
        if  (x < min){
            min = x;
        }
    });
    return min;
};

console.log(`The minimum of [${args}] is ${minFunction(args)}`);
