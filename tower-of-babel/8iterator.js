const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let n = 0;
        return {
            next(){
                n++;
                if (n <= max) {
                    if (n%3 == 0 && n %5 == 0){
                        return {done: false, value: 'FizzBuzz'};
                    } else if (n%3 == 0){
                        return {done: false, value: 'Fizz'};
                    } else if (n % 5 == 0){
                        return {done: false, value: 'Buzz'};
                    } else {
                        return {done: false, value: n};
                    }
                }else{
                    return { done: true };
                }
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}