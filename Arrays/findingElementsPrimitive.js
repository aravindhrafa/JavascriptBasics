const numbers = [1,2,3, 4]

console.log(numbers.indexOf(2)); 

console.log(numbers.indexOf('a'));
// Ans: -1

console.log(numbers.indexOf('1'));
// Ans: -1 


const numbers1 = [1,2,3,1, 4]; 
console.log(numbers1.lastIndexOf(1));


console.log(numbers1.indexOf(1) !== -1); 
// this could give the better understanding 


console.log(numbers1.includes(1))
// this line is the replacement of the above line code



//____________Comparison between of indexOf() function using two arguments for two contants____________ 

// Another argument of the indexOf() functionn 

console.log(numbers1.indexOf(1,2)); 
// Ans: 3

console.log(numbers.indexOf(1,2));
// Ans: -1



//____________Comparison between of indexOf() function using two arguments for two contants____________



