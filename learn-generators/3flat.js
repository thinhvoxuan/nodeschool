function *flat (arr) {
    for (var k in arr){
        var x = arr[k];
        if (Array.isArray(x)){
            yield *flat(x)
        }else{
            yield x
        }
    }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6