// filter function in js


let num = [5, 3, 9, 4,7,22, 34,51];


let newNum = num.filter(function(params) {
    return params % 2 == 0;
});


console.log(newNum);


// another filter function

let name = ['akhnuk', 66, 'azlan', 'osama', 49, 'salsabil'];


let newName = name.filter(function(value){
    return value / 2;
});

console.log(newName);