walk(); 

// Function declaration 
function walk(){
    console.log('walk'); 
}


// Function expression 

run(); 
// This will throw an error like 
// Uncaught ReferenceError: Cannot access 'run' before initialization

let run = function(){
    console.log('run'); 
}



// This concept is called Hoisting 

// During Hoisting, Javascript runtime, moves the function declaration 
// to the top of the program or file. So, function declaration when called 
// above could be executed comfoortabaly apart from function expressions

