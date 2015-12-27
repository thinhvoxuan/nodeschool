function *factorial(n){
    var current = 1;
    for(var x = 1; x <= n; x ++){
        current = current * x;
        yield current
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120