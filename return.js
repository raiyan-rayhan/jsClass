// return a function from a function.


function mainFunc(name){

    return function innerFunc(age){
        console.log( 'I am ' + name + ' & I am ' + age + 'Years Old');
    }
};

 let a = mainFunc('Ryhan');
 let b = a(22);

 console.log(b);