let num = [3, 5,33, 6, 75, 25, 66, 60, 24];


let add = num.reduce(function(a,b){
    return a + b;
});

console.log(add);

let minus = num.reduce(function(a,b){
    return a - b;
});

console.log(minus);

let multiply = num.reduce(function(c,d){
    return c * d;
});

console.log(multiply);