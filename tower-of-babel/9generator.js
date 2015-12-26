const max = process.argv[2];
let FizzBuzz = function*(){
    let n = 1;
    while (n <= max){
        if (n%3 == 0 && n %5 == 0){
            yield 'FizzBuzz';
        } else if (n%3 == 0){
            yield 'Fizz';
        } else if (n % 5 == 0){
            yield 'Buzz';
        } else {
            yield n;
        }
        n += 1;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}