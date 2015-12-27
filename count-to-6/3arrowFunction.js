var inputs = process.argv.slice(2);
var result = inputs.map((x)=> {return x[0]})
    .reduce(function(current, x){return current + x});
console.log(`[${inputs}] becomes "${result}"`);
