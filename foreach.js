
// practicing forEach function to traverse an array

let arr =[3, 5, 'Azlan', 32, 2, 55, 23, 'rayhan'];



arr.forEach(function(number, position, full){
    console.log(number + ' (' + position + ') ' + full);
});

// in the forEach function above the callback function contains 3 parameter first one provide the value from the array, second parameter provide the index number of the value from the array, and the third parameter provide the full array..


// below i'm trying to creat a function which resukts like forEach function


let name =['azlan', 'osama', 'akhnuk', 'nabiha', 'salsabil'];

function each (value, callback){
    for(let i = 0; i<value.length; i++ ){
        callback( value[i], i);
    }
};

each(name, function(name, ind){
    console.log(name + ' ('+ ind +')');
});