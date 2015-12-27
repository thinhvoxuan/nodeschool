function *range(from, to) {
    for (var x = from; x <= to; x++){
        yield x
    }
}

for (var r of range(5, 10)) {
    console.log( r );
}