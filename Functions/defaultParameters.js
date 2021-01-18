function interest(principal, rate, years){
    return principal*rate/100 * years; 
}
console.log(interest(10000, 3.5,5))

// ________________________________________________________


// Implementing default values 
// 1st Method 

function interest1(principal, rate, years){
    rate = rate || 3.5; 
    years = years || 5;

    return principal*rate/100 * years; 
}
console.log(interest1(10000))

// ________________________________________________________


// 2nd Method 

function interest2(principal, rate = 3.5, years = 5){
    return principal*rate/100 * years; 
}
console.log(interest2(10000))



//_____________________________________________________________



// function interest3(principal, rate = 3.5, years){
//     return principal*rate/100 * years; 
// }
// console.log(interest3(10000)); 

// Once default value is given for one argument, other arguments 
// following them should also be defaulted with values 
// or they may throw NaN error value 


//_____________________________________________________________



function interest3(principal, rate = 3.5, years){
    return principal * rate/100 * years;
}

console.log(interest3(10000, undefined, 5))