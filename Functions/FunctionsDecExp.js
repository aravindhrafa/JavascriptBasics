// Function declaration 
function walk(){
    console.log('walk'); 
}


// Function expression 

let run = function(){
    console.log('run'); 
}

walk();
run(); 


let move =  run; 
move(); 