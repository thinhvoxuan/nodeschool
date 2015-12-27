module.exports = function average(...args){
    var sum = 0;
    args.forEach((x) => sum += x);
    return sum / args.length;
};