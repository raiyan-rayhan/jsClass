
const self = {
    name: 'rayhan',
    age: 22,
    height: `5'8"`
}

const another ={
    name: 'habib',
    age: 20,
    height:`5'7"`
}

function display(nameData, callback){
    console.log('Hello Mr. ' + nameData.name +', Your age is:' + nameData.age);
    if(nameData.age>= 20){
        callback();
    }else{
        console.log('You are not selected');
    };
    
}

display(self, function(){
    console.log('you are above 20 yrs and selected for the mission');
});

display(another, function(){
    console.log('you can try later');
});






function demo (input, callback, args){
    console.log('hello ' + input);
    callback();
    console.log('the length of ' + '(' + args +') is:' + args.length );
};

demo('Mr Ryan', function(){
    console.log('this is from callback function');
},'this is another argument');

