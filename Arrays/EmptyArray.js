let numbers = [1,2,3,4,5];
let another = numbers ; // Another is referencing to number object 

// one of the solution to empty the array : numbers
numbers = []; 

console.log(numbers); 
console.log(another); 
// Still referencing to number having the address which is old 
// thats why, solution is returned the same as former numbers 



let numbers1 = [1,2,3,4,5];
let another1 = numbers1;

//  2nd solution to empty an array 
numbers1.length = 0; 
console.log(numbers1); 
console.log(another1);



let numbers2 = [1,2,3,4,5];
let another2 = numbers2 ;

//  3rd solution to empty an array 
numbers2.splice(0, numbers2.length); 
console.log(numbers2); 
console.log(another2);



let numbers3 = [1,2,3,4,5];
let another3 = numbers3 ;

//  4th solution to empty an array 

while (numbers3.length > 0) numbers3.pop(); 
// This method of emptying the array seems to be producing 
// heavier cost to remove elements from the array 
// this will not be suitable solution to approach the problem 
// Since looping and calling the function could impute heavy computational cost 



console.log(numbers3); 
console.log(another3);