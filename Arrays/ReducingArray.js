const number = [-1,4,6,-6,8]; 


/*

//__________Old fashioned way_____________

let sum = 0
for(let value of number)
    sum += value; 

console.log(sum);

//__________Old fashioned way_____________

*/

/*

// a= 0 , c = -1 => a = -1
// a= -1, c = 4  => a = 3
// a=  3, c = 6  => a = 9
// a=  9, c = -6 => a = 3
// a=  3, c = 8  => a = 11

const sum = number.reduce((accumulator, currentValue) => {
    return accumulator+currentValue; 
}, 0);

console.log(sum); 

*/



///___________Elegent way_________________________________

// a= -1, c = 4  => a = 3
// a=  3, c = 6  => a = 9
// a=  9, c = -6 => a = 3
// a=  3, c = 8  => a = 11

const sum = number.reduce(
    (accumulator, currentValue) => accumulator+currentValue
);

console.log(sum); 


///___________Elegent way_________________________________