let x = 0 // Declare variable 
var y = 0 // Another way of declaring variable 

function start(){
    for(let i =0; i<5;i++){
        console.log(i); 
    }//console.log(i)   ----->> this will throw an exception error 
}

start();

//__________________________________________________________________________



function start1(){
    for(var i =0; i<5;i++){
        console.log(i); 
    }console.log(i)  
}

start1();

// var variable scope is limited to function and not to the block
// So, var variables can be accessed anywhere inside the function 
// This is weired thing 
// Before ES6, this is the only way of declaration 
// After ES6, there came let and const to delare variables 



//__________________________________________________________________________


function start2(){
    for(var i=0; i <5; i++){
        if(true){
            var color = 'red';
        }
    }console.log(color)
}

start2();



//__________________________________________________________________________


//______________________Important ________________________________________

var color = 'red'; // This will get added to Window object  
let age = 30; 

// The below function is global scoped function
function sayHi(){
    console.log('hi');
}