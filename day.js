function sum(a, b) {
    console.log(a+b);
    return a + b;
}

let result  = sum(1, 2)
result = sum (result, 3)
console.log('Final result: ', result)