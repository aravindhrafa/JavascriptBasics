// Performing a task 
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName); 
}



// Calculating a value 

function square (number){
    return number*number; 
}

greet('Aravindh' , 'Ravi'); 

console.log(square(2)); 


// Another way of writing calculating function and passing it into another function throw variable 


function cube(number1){
    return number1*number1*number1;
}

let cubeOfNumber = cube(3); 
console.log(cubeOfNumber); 