const first = [1,2,3];
const second = [4,5,6];


// combining both the array using Spread Operator 

const combined = [...first , ...second];
console.log(combined);


const combined1 = [...first,'a', ...second, 'b']; 
console.log(combined1);



// For taking the copy of the combined array 

const copyOfArray = [...combined1];
console.log(copyOfArray); 