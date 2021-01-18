const numbers = [3,4]; 

numbers.push(5,6); 
// Add arguments at the end of the array

numbers.unshift(1,2); 
// Add arguments at the beginning of the array 

numbers.splice(2,0,'a','b');
// Add or Remove arguments at the middle of the array 

console.log(numbers);