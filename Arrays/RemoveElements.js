const numbers = [1,2,3,4,5]; 

const last = numbers.pop();
// Always remove the last element from the array 
console.log(last);
console.log(numbers);

const first = numbers.shift();
// Always remove the first elemebt from the array 
console.log(first);
console.log(numbers);


const middle =  numbers.splice(2,1); 
// Always return an array with element(s)that are requested to be removed 

console.log(middle);
console.log(numbers);