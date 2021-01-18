function greet(name){                // name parameter is passed 
    console.log('Hello ' + name ); 
}
// name parameter is temporary inside the function 

greet('Aravindh');// Argument  is passed 

greet('Ravi', 'Chitra'); // This will take only the first argument 

function greet1(name, lastName){
    console.log('Hello ' + name + " " + lastName); 
}

greet1("Aravindh"); 
// Answer: Hellow Aravindh undefined 
// if argument is not passedt to the parameter, undefined is the default value 


greet1('Aravindh', 'Ravi');